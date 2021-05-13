<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import args from '../metadata';
  import Button from '@svelterialjs/core/Button.svelte';

  console.log(args('core/Button'));
</script>

<Meta
  title="Components/Core/Button"
  component={Button}
  argTypes={args('core/Button', {
    size: {
      defaultValue: 'default',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      control: {
        type: 'select',
      },
    },
    variant: {
      defaultValue: 'raised',
      options: ['raised', 'fab', 'icon'],
      control: {
        type: 'select',
      },
    },
    use: {
      control: false,
    },
    slot_default: {
      defaultValue: 'Button',
    },
  })} />

<Template let:args>
  <Button {...args}>
    {args.slot_default}
  </Button>
</Template>

<Story name="Raised" />
