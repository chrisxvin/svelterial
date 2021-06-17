<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Switch } from '@svelterialjs/form';
  import metadata from '../metadata';
</script>

<Meta title="Components/Form/Switch" component={Switch} />

<Story
  name="Basic"
  argTypes={metadata('form/Switch')}
  args={{ slot_default: 'Click Me' }}
  let:args>
  <Switch {...args} --switch-color={args['--switch-color']}>
    {args.slot_default}
  </Switch>
</Story>
