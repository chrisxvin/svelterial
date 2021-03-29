const MaterialApp = {
  name: 'MaterialApp',
  defaults: {
    themes: {
      light: {
        surface: '#fff',
      },
      dark: {
        surface: '212121',
      },
    },
  },
};

const Button = {
  name: 'Button',
  defaults: {
    'border-radius': '2px',
    'focus-opcity': 0.24,
    'hover-opacity': 0.08,
    'active-opacity': 0.18,
    'icon-padding': '12px',
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

export default [MaterialApp, Button];
