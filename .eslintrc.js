module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  overrides: [
    {
      files: ['**/tests/**/*.ts'],
      env: {
        jest: true,
      },
    },
  ],
};
