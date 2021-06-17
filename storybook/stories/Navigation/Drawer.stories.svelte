<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Drawer } from '@svelterialjs/navigation';
  import { Avatar, Divider } from '@svelterialjs/core';
  import { ListItem } from '@svelterialjs/list';
  const items = Array.from(Array(5).keys());
</script>

<Meta
  title="Components/Navigation/Drawer"
  component={Drawer}
  argTypes={metadata('navigation/Drawer', {
    position: {
      options: ['relative', 'absolute', 'fixed'],
      control: {
        type: 'select',
      },
    },
    edge: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
  })} />

<Story id="a" name="Drawer" let:args>
  <Drawer {...args}>
    <Avatar>
      <img src="https://picsum.photos/100" alt="Avatar" />
    </Avatar>
    <h5>Drawer</h5>
    {args.slot_default}
    <Divider />
    {#each items as i}
      <ListItem selectable dense nav>
        Item {i + 1}
      </ListItem>
    {/each}
  </Drawer>
</Story>

<style>
  h5 {
    margin: 0;
  }
</style>
