<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import args from '../metadata';
  import CircularProgress from '@svelterialjs/progress/Circular.svelte';
</script>

<Meta
  title="Components/Progress/Circular"
  component={CircularProgress}
  argTypes={args('progress/Circular', {
    slot_default: {
      defaultValue: '',
    },
  })} />

<Template let:args>
  <CircularProgress {...args}>
    {args.slot_default}
  </CircularProgress>
</Template>

<Story id="circular" name="Circular" />
