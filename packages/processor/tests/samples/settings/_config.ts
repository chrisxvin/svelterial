module.exports = {
  plugins: [
    {
      name: 'Settings',
      defaults: {
        red: 'red',
      },
    },
    {
      name: 'Component',
      defaults: (vars) => ({
        color: vars.Settings.red,
      }),
    },
  ],
};
