<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import args from '../metadata';
  import Alert from '@svelterialjs/core/Alert.svelte';
  import Button from '@svelterialjs/core/Button.svelte';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiHome, mdiClose } from '@mdi/js';
</script>

<Meta
  title="Components/Core/Alert"
  component={Alert}
  argTypes={args('core/Alert', {
    class: {
      defaultValue: 's-primary',
    },
    border: {
      defaultValue: false,
      options: [false, 'top', 'bottom', 'left', 'right'],
      control: {
        type: 'select',
      },
    },
    slot_default: {
      defaultValue: 'Alert Content',
    },
    slot_prepend: {
      control: false,
    },
    slot_append: {
      control: false,
    },
  })} />

<Template let:args id="basic">
  <Alert {...args}>
    {args.slot_default}
  </Alert>
</Template>

<Template let:args id="icons">
  <Alert {...args}>
    <Icon slot="prepend" path={mdiHome} />
    <p style="padding: 0 4px">
      {args.slot_default}
    </p>
    <Button slot="append" variant="icon" text>
      <Icon path={mdiClose} />
    </Button>
  </Alert>
</Template>

<Story template="basic" name="Basic" />
<Story template="icons" name="With Icons" />
