module.exports = {
  variables: {
    Component: {
      color: 'blue',
    },
  },
  plugins: [
    {
      name: 'Component',
      defaults: {
        color: 'red',
      },
    },
  ],
};
