import MaterialApp from '@svelterialjs/core/src/MaterialApp.svelte';

export const decorators = [() => MaterialApp];

export const parameters = {
  layout: 'centered',
  controls: {
    expanded: true,
  },
  options: {
    storySort: {
      order: ['Introduction', 'Components', ['Core']],
    },
  },
};
