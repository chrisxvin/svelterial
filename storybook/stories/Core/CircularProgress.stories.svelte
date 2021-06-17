<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import CircularProgress from '@svelterialjs/core/src/CircularProgress.svelte';
</script>

<Meta
  title="Components/Core/CircularProgress"
  component={CircularProgress}
  argTypes={metadata('core/CircularProgress')} />

<Story id="a" name="CircularProgress" let:args>
  <CircularProgress {...args}>
    {args.slot_default}
  </CircularProgress>
</Story>
