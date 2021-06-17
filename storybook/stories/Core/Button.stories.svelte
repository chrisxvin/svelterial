<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import Button from '@svelterialjs/core/src/Button.svelte';
  import Icon from '@svelterialjs/core/src/Icon.svelte';
  import { mdiHome } from '@mdi/js';
</script>

<Meta
  title="Components/Core/Button"
  component={Button}
  argTypes={metadata('core/Button', {
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

<Story name="Raised" args={{ variant: 'raised' }} let:args>
  <Button {...args}>
    {args.slot_default}
  </Button>
</Story>

<Story name="FAB | Icon" args={{ variant: 'fab' }} let:args>
  <Button {...args}>
    <Icon path={mdiHome} />
  </Button>
</Story>
