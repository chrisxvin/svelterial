<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import args from '../metadata';
  import Button from '@svelterialjs/core/Button.svelte';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiHome } from '@mdi/js';
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

<Template let:args id="base">
  <Button {...args}>
    {args.slot_default}
  </Button>
</Template>

<Template let:args id="icon">
  <Button {...args}>
    <Icon path={mdiHome} />
  </Button>
</Template>

<Story template="base" name="Raised" args={{ variant: 'raised' }} />
<Story template="icon" name="FAB and Icon" args={{ variant: 'fab' }} />
