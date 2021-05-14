const svelterial = require('@svelterialjs/process');

module.exports = {
  webpackFinal: async (config) => {
    const svelteLoaderIndex = config.module.rules.findIndex(({ loader }) => {
      if (loader && loader.includes('svelte-loader')) return true;
    });
    config.module.rules[svelteLoaderIndex].options = {
      preprocess: svelterial(),
    };
    return config;
  },
  stories: ['../stories/**/*.stories.svelte'],
  addons: ['@storybook/addon-svelte-csf', '@storybook/addon-controls'],
  features: {
    postcss: false,
  },
};
