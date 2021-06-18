<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Checkbox } from '@svelterialjs/form';
  import metadata from '../metadata';

  let group = [];
</script>

<Meta title="Components/Form/Checkbox" component={Checkbox} />

<Story name="Single" argTypes={metadata('form/Checkbox')} let:args>
  <Checkbox {...args}>Test</Checkbox>
</Story>

<Story name="Group">
  <span>
    Value: {group}
  </span>
  <Checkbox bind:group value={1}>Item 1</Checkbox>
  <Checkbox bind:group value={2}>Item 2</Checkbox>
  <Checkbox bind:group value={3}>Item 3</Checkbox>
</Story>
