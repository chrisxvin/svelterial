<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Checkbox } from '@svelterialjs/form';
  import metadata from '../metadata';

  let group = [2];
</script>

<Meta title="Components/Form/Checkbox" component={Checkbox} />

<Story
  name="Single"
  argTypes={metadata('form/Checkbox')}
  args={{ slot_default: 'Click Me' }}
  let:args>
  <Checkbox {...args}>
    {args.slot_default}
  </Checkbox>
</Story>

<Story name="Group">
  <span>
    Value: {group}
  </span>
  <Checkbox bind:group value={1}>Item 1</Checkbox>
  <Checkbox bind:group value={2}>Item 2</Checkbox>
  <Checkbox bind:group value={3}>Item 3</Checkbox>
</Story>
