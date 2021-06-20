<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Icon } from '@svelterialjs/core';
  import { ListCollapse, ListItem } from '@svelterialjs/list';
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

<Story name="Basic" args={{ indent: '24px' }} let:args>
  <div class="container">
    <ListCollapse {...args}>
      <svelte:fragment slot="trigger" let:active>
        <ListItem selectable>
          <Icon
            slot="prepend"
            --icon-rotate="{active ? 180 : 0}deg"
            path={mdiChevronDown} />
          Hello
        </ListItem>
      </svelte:fragment>
      {#each Array(3) as _, i}
        <ListItem>
          Item {i + 1}
        </ListItem>
      {/each}
    </ListCollapse>
  </div>
</Story>

<Story
  name="Triggers"
  args={{ indent: '24px', triggers: ['mouseover:show'] }}
  let:args>
  <div class="container">
    <ListCollapse {...args}>
      <svelte:fragment slot="trigger" let:active>
        <ListItem selectable>
          <Icon
            slot="prepend"
            --icon-rotate="{active ? 180 : 0}deg"
            path={mdiChevronDown} />
          Hello
        </ListItem>
      </svelte:fragment>
      {#each Array(3) as _, i}
        <ListItem>
          Item {i + 1}
        </ListItem>
      {/each}
    </ListCollapse>
  </div>
</Story>

<style>
  .container {
    width: 300px;
    border: 1px solid #d3d3d3;
  }
</style>
