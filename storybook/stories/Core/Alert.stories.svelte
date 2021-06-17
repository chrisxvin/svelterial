<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Alert, Button, Icon } from '@svelterialjs/core';
  import { mdiHome, mdiClose } from '@mdi/js';
</script>

<Meta
  title="Components/Core/Alert"
  component={Alert}
  argTypes={metadata('core/Alert', {
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

<Story name="Basic" let:args>
  <Alert {...args}>
    {args.slot_default}
  </Alert>
</Story>
<Story name="With Icons" let:args>
  <Alert {...args}>
    <Icon slot="prepend" path={mdiHome} />
    <p style="padding: 0 4px">
      {args.slot_default}
    </p>
    <Button slot="append" variant="icon" text>
      <Icon path={mdiClose} />
    </Button>
  </Alert>
</Story>
