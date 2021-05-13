<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
</script>

<Meta
  title="Core/Button"
  component={Button}
  argTypes={{
    content: {
      control: { type: 'text' },
      description: 'hello',
      table: { defaultValue: { summary: 'lol' } },
    },
  }} />

<Template let:args>
  <Button {...args} />
</Template>

<Story
  name="Primary"
  args={{
    content: 'Hello',
  }} />
