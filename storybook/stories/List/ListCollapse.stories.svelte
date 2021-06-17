<!-- <script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Icon } from '@svelterialjs/core';
  import { List, ListCollapse, ListItem } from '@svelterialjs/list';
  import { mdiChevronDown } from '@mdi/js';
</script>

<Meta
  title="Components/List/ListCollapse"
  component={ListCollapse}
  argTypes={metadata('list/ListCollapse', {
    slot_default: {
      control: false,
    },
    slot_trigger: {
      control: false,
    },
  })} />

<Story name="Level 1" let:args>
  <div class="container">
    <ListCollapse {...args}>
      <svelte:fragment slot="trigger" let:toggle>
        <ListItem selectable on:click={toggle}>
          <Icon
            slot="prepend"
            --icon-rotate="{args.active ? 180 : 0}deg"
            path={mdiChevronDown} />
          Hello
        </ListItem>
      </svelte:fragment>
      <List --list-indent="24px">
        {#each Array(3) as _, i}
          <ListItem>
            Item {i + 1}
          </ListItem>
        {/each}
      </List>
    </ListCollapse>
  </div>
</Story>

<style>
  .container {
    width: 300px;
    border: 1px solid #d3d3d3;
  }
</style> -->
