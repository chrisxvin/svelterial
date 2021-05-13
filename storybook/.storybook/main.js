module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
  ],
};
