<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Avatar, Icon } from '@svelterialjs/core';
  import { mdiHome } from '@mdi/js';
</script>

<Meta
  title="Components/Core/Avatar"
  component={Avatar}
  argTypes={metadata('core/Avatar', {
    slot_default: {
      control: false,
    },
  })} />

<Story name="SVG Icon" let:args>
  <Avatar {...args}>
    <Icon path={mdiHome} />
  </Avatar>
</Story>

<Story name="Image" let:args>
  <Avatar {...args}>
    <img src="https://picsum.photos/200" alt="Avatar" />
  </Avatar>
</Story>

<Story name="Text" let:args>
  <Avatar {...args}>
    <h6>MH</h6>
  </Avatar>
</Story>
