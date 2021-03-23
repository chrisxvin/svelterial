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

export interface Config {
  theme: object;
  globals: object;
  variables: object;

  plugins: SvelterialPlugin[];
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

export default (config: Config) => ({
  async style({ content, attributes: info, filename }: Processor) {
    if (!info.svelterial) return null;

    if (!info.name) {
      throw new Error('SVELTERIAL: The name of a plugin has not been defined');
    }

    let variables = {};
    let input = content;
    const dependencies = [];
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
    if (info.name === 'APP') {
      variables = config.theme;
    } else {
      const plugin = plugins.find(({ name }) => info.name === name);
      const defaultConfig = plugin?.variables || {};
      const userConfig = config?.variables?.[info.name] || {};
      variables = deepmerge(defaultConfig, userConfig);
    }

    input = `${variableTransformer(variables)}\n${input}`;

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
