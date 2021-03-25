import { isPlainObject } from 'is-plain-object';
import globalStyles from './global';
import variableTransformer from './variableTransformer';

const sass = require('sass');
const deepmerge = require('deepmerge');
const postcss = require('postcss');
const path = require('path');
const { readFileSync } = require('fs');

interface SvelterialPlugin {
  name: string;
  // eslint-disable-next-line no-unused-vars
  defaults: object | ((vars: object) => object);
}

interface ConfigOptions {
  cacheVariables: boolean;
}

export interface Config {
  variables?: object;
  options?: ConfigOptions;

  plugins?: SvelterialPlugin[];
}

interface Processor {
  content: string;
  attributes: {
    svelterial: boolean;
    name: string;
    src?: string;
  };
  filename: string;
}

const defaultConfig: Config = {
  variables: {},
  options: {
    cacheVariables: true,
  },
  plugins: [],
};

function parseVariables(config: Config) {
  const { variables, plugins } = config;
  return plugins.reduce((acc: object, plugin) => {
    const userConfig = variables?.[plugin.name] || {};
    if (isPlainObject(plugin.defaults)) {
      acc[plugin.name] = deepmerge(plugin.defaults, userConfig);
    } else {
      // TODO: fix this
      // @ts-ignore
      const pluginConfig = plugin.defaults(acc);
      acc[plugin.name] = deepmerge(pluginConfig, userConfig);
    }

    return acc;
  }, {});
}

export default (_config: Config) => {
  // For caching variables
  const cache = {
    config: null,
    variables: null,
    set: false,
  };

  return {
    async style({ content, attributes: info, filename }: Processor) {
      if (!info.svelterial) return null;

      let input: string = content;
      const dependencies: string[] = [];

      const config: Config = cache.config || deepmerge(defaultConfig, _config);

      if (config.options.cacheVariables) {
        if (!cache.set) {
          cache.config = deepmerge(defaultConfig, _config);
          cache.variables = parseVariables(config);
          cache.set = true;
        }
      }

      const variables = cache.variables || parseVariables(config);

      /**
       * Processing file if there is a 'src' attribute.
       */
      if (info.src) {
        const importedFilePath = path.resolve(path.dirname(filename), info.src);
        input = readFileSync(importedFilePath).toString();
        dependencies.push(importedFilePath);
      }

      const sassOutput = sass.renderSync({
        data: input,
        outFile: `${filename}.css`,
        outputStyle: 'compressed',
        sourceMap: true,
        omitSourceMapUrl: true,
        includePaths: [process.cwd()],
        importer: [
          (url: string) => {
            if (!url.startsWith('svelterial')) return null;

            // Name of the imported plugin.
            const name = url.split('/')[1];

            /**
             * Returns the SCSS variables that are to be used in the plugin.
             */
            return {
              contents: variableTransformer(variables[name] || {}),
            };
          },
        ],
      });

      dependencies.concat(sassOutput.stats.includedFiles);

      const output = await postcss([globalStyles()]).process(sassOutput.css.toString(), {
        from: filename,
        map: { prev: sassOutput.map.toString(), inline: false },
      });

      dependencies.concat(
        output.messages.reduce((acc, msg) => {
          if (msg.type !== 'dependency') return acc;
          acc.push(msg.file);

          return acc;
        }, []),
      );

      return {
        code: output.css,
        map: output.map,
        dependencies,
      };
    },
  };
};
