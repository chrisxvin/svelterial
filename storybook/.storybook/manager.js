import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const mytheme = create({
  base: 'light',
  colorSecondary: '#651fff',
  textColor: 'rgba(0,0,0,.87)',
  brandTitle: 'Svelterial',
});

addons.setConfig({
  theme: mytheme,
});
