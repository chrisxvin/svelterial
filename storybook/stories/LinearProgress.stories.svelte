<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import args from '../metadata';
  import LinearProgress from '@svelterialjs/progress/Linear.svelte';
</script>

<Meta
  title="Components/Progress/Linear"
  component={LinearProgress}
  argTypes={args('progress/Linear', {
    slot_default: {
      defaultValue: '',
    },
  })} />

<Template let:args>
  <div>
    <LinearProgress {...args}>
      {args.slot_default}
    </LinearProgress>
  </div>
</Template>

<Story id="linear" name="Linear" />

<style>
  div {
    width: 200px;
  }
</style>
