module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['svelte3', '@typescript-eslint'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:import/typescript'],
  overrides: [
    {
      files: ['**/tests/**/*.ts'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'svelte3/ignore-styles': () => true,
  },
};
