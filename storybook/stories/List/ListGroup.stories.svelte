<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { List, ListGroup } from '@svelterialjs/list';

  let value;
</script>

<Meta
  title="Components/List/ListGroup"
  component={ListGroup}
  argTypes={metadata('list/ListGroup', {
    slot_default: {
      control: false,
    },
    slot_prepend: {
      control: false,
    },
    slot_append: {
      control: false,
    },
    slot_subtitle: {
      control: false,
    },
  })} />

<Story
  id="a"
  name="ListGroup"
  args={{
    items: [
      [1, 'Item 1'],
      [2, 'Item 2'],
      [3, 'Item 3'],
    ],
  }}
  let:args>
  <div class="container">
    <List>
      <span slot="title">
        Value: {$value}
      </span>
      <ListGroup {...args} bind:value let:item>
        {item}
      </ListGroup>
    </List>
  </div>
</Story>

<style>
  .container {
    width: 300px;
    border: 1px solid #d3d3d3;
  }
</style>
