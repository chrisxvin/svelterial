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
  variables: object;
}

interface ConfigOptions {
  cacheVariables: boolean;
}

export interface Config {
  settings?: object;
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

// For caching variables.
let cache;

const defaultConfig: Config = {
  settings: {},
  variables: {},
  options: {
    cacheVariables: true,
  },
  plugins: [],
};

function pluginVariables(variables: object, settings: object) {
  if (isPlainObject(variables)) return variables;
  if (typeof variables === 'function') return variables(settings);
  return {};
}

export default (_config: Config) => ({
  async style({ content, attributes: info, filename }: Processor) {
    if (!info.svelterial) return null;

    if (!info.name) {
      throw new Error('SVELTERIAL: The name of a plugin has not been defined');
    }

    let variables: string = '';
    let input: string = content;
    const config: Config = deepmerge(defaultConfig, _config);
    const dependencies: string[] = [];
    const plugins = config.plugins.flat(Infinity);

    /**
     * Processing file if there is a 'src' attribute.
     */
    if (info.src) {
      const importedFilePath = path.resolve(path.dirname(filename), info.src);
      input = readFileSync(importedFilePath).toString();
      dependencies.push(importedFilePath);
    }

    /**
     * Sets the SCSS variables that are to be used in the plugin.
     */
    if (config.options.cacheVariables) {
      if (!cache) {
        // caching strings of sass variables.
        cache = {
          globalVariables: variableTransformer({
            settings: config?.settings || {},
          }),
          variables: plugins.reduce((accumulator, plugin) => {
            const userConfig = config.variables?.[plugin.name] || {};
            const mergedConfig = deepmerge(
              pluginVariables(plugin.variables, config.settings),
              userConfig,
            );
            accumulator[plugin.name] = variableTransformer(mergedConfig);
            return accumulator;
          }, {}),
        };
      }

      variables = `${cache.globalVariables}\n${cache.variables[info.name]}`;
    } else {
      const plugin = plugins.find((p) => p.name === info.name);
      const userConfig = config.variables?.[plugin.name] || {};
      const transformedVars = variableTransformer(
        deepmerge(pluginVariables(plugin.variables, config.settings), userConfig),
      );
      const globalVariables = variableTransformer({
        settings: config.settings,
      });
      variables = `${globalVariables}\n${transformedVars}`;
    }

    input = `${variables}\n${input}`;

    const sassOutput = sass.renderSync({
      data: input,
      outFile: `${filename}.css`,
      outputStyle: 'compressed',
      sourceMap: true,
      omitSourceMapUrl: true,
      includePaths: [process.cwd()],
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
});
