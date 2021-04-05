const MaterialApp = {
  name: 'MaterialApp',
  defaults: {
    fontSize: '16px',
    lineHeight: 1.5,
    themes: {
      light: {
        surface: '#fff',
      },
      dark: {
        surface: '#212121',
      },
    },
  },
};

const Button = {
  name: 'Button',
  defaults: {
    borderRadius: '4px',
    sizes: {
      'x-small': 20,
      small: 28,
      default: 36,
      large: 44,
      'x-large': 52,
    },
    'font-sizes': {
      'x-small': '0.625rem',
      small: '0.75rem',
      default: '0.875rem',
      large: '0.875rem',
      'x-large': '1rem',
    },
  },
};

module.exports = [MaterialApp, Button];
