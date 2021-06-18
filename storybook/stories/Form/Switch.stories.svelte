<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Switch } from '@svelterialjs/form';
  import metadata from '../metadata';

  let group = [];
</script>

<Meta title="Components/Form/Switch" component={Switch} />

<Story
  name="Single"
  argTypes={metadata('form/Switch')}
  args={{ slot_default: 'Click Me' }}
  let:args>
  <Switch {...args} --switch-color={args['--switch-color']}>
    {args.slot_default}
  </Switch>
</Story>

<Story name="Group">
  <span>
    Value: {group}
  </span>
  <Switch bind:group value={1}>Item 1</Switch>
  <Switch bind:group value={2}>Item 2</Switch>
  <Switch bind:group value={3}>Item 3</Switch>
</Story>
