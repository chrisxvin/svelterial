<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Radio } from '@svelterialjs/form';
  import metadata from '../metadata';

  let group = 2;
</script>

<Meta title="Components/Form/Radio" component={Radio} />

<Story
  name="Single"
  argTypes={metadata('form/Radio')}
  args={{ slot_default: 'Click Me' }}
  let:args>
  <Radio {...args}>
    {args.slot_default}
  </Radio>
</Story>

<Story name="Group">
  <span>Value: {group}</span>
  <Radio bind:group value={1}>Item 1</Radio>
  <Radio bind:group value={2}>Item 2</Radio>
  <Radio bind:group value={3}>Item 3</Radio>
</Story>
