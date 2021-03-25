module.exports = {
  plugins: [
    {
      name: 'Size',
      defaults: {
        size: '16px',
      },
    },
    {
      name: 'Color',
      defaults: {
        color: 'red',
      },
    },
    [
      {
        name: 'Font',
        defaults: {
          font: '"Roboto"',
        },
      },
    ],
  ],
};
