<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { List, ListItem } from '@svelterialjs/list';
</script>

<Meta
  title="Components/List/List"
  component={List}
  argTypes={metadata('list/List')}
  args={{ slot_title: 'Title' }} />

<Story id="a" name="List" let:args>
  <div class="container">
    <List>
      <span slot="title">
        {args.slot_title}
      </span>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  </div>
</Story>

<style>
  .container {
    border: thin solid #eee;
    width: 300px;
  }
</style>
