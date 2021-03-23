module.exports = {
  settings: {
    red: 'red',
    size: '64px',
  },
  plugins: [
    {
      name: 'Component',
      variables: (settings) => ({
        color: settings.red,
      }),
    },
  ],
};
