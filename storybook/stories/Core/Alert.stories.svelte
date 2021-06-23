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
    border: {
      options: [false, 'top', 'bottom', 'left', 'right'],
      control: {
        type: 'select',
      },
    },
  })}
  args={{ class: 's-primary' }} />

<Story name="Basic" let:args>
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in iure neque, ipsa,
    obcaecati earum itaque doloribus est dicta dolore suscipit illo modi corrupti
    similique repellat deleniti sunt recusandae autem.
  </Alert>
</Story>

<Story name="With Icons" let:args>
  <Alert {...args}>
    <Icon slot="prepend" path={mdiHome} />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti deserunt magnam
    delectus debitis officia dicta blanditiis voluptatum omnis quo doloribus adipisci quis
    illo necessitatibus consequuntur illum natus inventore, quod quos ipsum. Quae possimus
    id aliquam illo temporibus natus nemo!
    <Button slot="append" variant="icon" size="small" text>
      <Icon path={mdiClose} />
    </Button>
  </Alert>
</Story>
