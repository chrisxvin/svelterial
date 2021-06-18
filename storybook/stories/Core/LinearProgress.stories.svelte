<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import LinearProgress from '@svelterialjs/core/src/LinearProgress.svelte';
</script>

<Meta
  title="Components/Core/LinearProgress"
  component={LinearProgress}
  argTypes={metadata('core/LinearProgress')}
  args={{ slot_default: '' }} />

<Story id="a" name="LinearProgress" let:args>
  <div>
    <LinearProgress {...args}>
      {args.slot_default}
    </LinearProgress>
  </div>
</Story>

<style>
  div {
    width: 200px;
  }
</style>
