module.exports = {
  variables: {
    Component: {
      color: 'blue',
    },
  },
  plugins: [
    {
      name: 'Component',
      variables: {
        color: 'red',
      },
    },
  ],
};
