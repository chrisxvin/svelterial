const svelterial = require('@svelterialjs/process');
const VirtualModulesPlugin = require('webpack-virtual-modules');
const metadata = require('@svelterialjs/metadata');

module.exports = {
  webpackFinal: async (config) => {
    const rules = config.module.rules;
    const svelteLoaderIndex = rules.findIndex(
      ({ loader }) => loader && loader.includes('svelte-loader'),
    );
    rules[svelteLoaderIndex].options = {
      preprocess: svelterial(),
    };
    config.plugins.push(
      new VirtualModulesPlugin({
        'node_modules/svelterial-metadata.js': `export default JSON.parse(${JSON.stringify(
          JSON.stringify(metadata),
        )})`,
      }),
    );
    return config;
  },
  stories: ['../stories/**/*.stories.svelte'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.svelte?$/],
          include: [],
        },
      },
    },
    '@storybook/addon-a11y',
    // '@storybook/addon-measure',
    '@storybook/addon-svelte-csf',
  ],
  features: {
    postcss: false,
  },
};
