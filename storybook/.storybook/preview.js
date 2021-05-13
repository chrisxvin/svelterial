import MaterialApp from '@svelterialjs/core/MaterialApp.svelte';

export const decorators = [() => MaterialApp];

export const parameters = {
  layout: 'centered',
  controls: {
    expanded: true,
  },
};
