<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Badge, Button, Icon } from '@svelterialjs/core';
  import { mdiHome } from '@mdi/js';
</script>

<Meta title="Components/Core/Badge" component={Badge} argTypes={metadata('core/Badge')} />

<Story
  name="Text"
  parameters={{ layout: 'padded' }}
  args={{ slot_default: 'New' }}
  let:args>
  <h1>
    Heading 1 <Badge {...args}>{args.slot_default}</Badge>
  </h1>
  <br />
  <h2>
    Heading 2 <Badge {...args}>{args.slot_default}</Badge>
  </h2>
  <br />
  <h3>
    Heading 3 <Badge {...args}>{args.slot_default}</Badge>
  </h3>
  <br />
  <h4>
    Heading 4 <Badge {...args}>{args.slot_default}</Badge>
  </h4>
  <br />
  <h5>
    Heading 5 <Badge {...args}>{args.slot_default}</Badge>
  </h5>
  <br />
  <h6>
    Heading 6 <Badge {...args}>{args.slot_default}</Badge>
  </h6>
</Story>

<Story name="Button" id="button" args={{ slot_default: '12' }} let:args>
  <Button>
    Notifications
    <Badge {...args}>{args.slot_default}</Badge>
  </Button>
</Story>

<Story name="Icon" id="icon" args={{ slot_default: '1' }} let:args>
  <div style="position:relative;">
    <Icon path={mdiHome} />
    <Badge {...args}>{args.slot_default}</Badge>
  </div>
</Story>
