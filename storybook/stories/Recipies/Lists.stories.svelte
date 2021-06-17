<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Icon, Avatar } from '@svelterialjs/core';
  import { List, ListItem } from '@svelterialjs/list';
  import { mdiMessage } from '@mdi/js';
</script>

<Meta title="Recipies/Lists" />

<Story
  name="Chats"
  args={{
    recent: [
      { name: 'Evan You', unread: true },
      { name: 'Rich Harris', unread: false },
      { name: 'Ryan Carniato', unread: false },
    ],
    previous: [{ name: 'Harshit Somani' }],
  }}
  let:args>
  <div class="container">
    <List>
      <span slot="title"> Recent Chats </span>
      {#each args.recent as { name, unread }, i}
        <ListItem>
          <Avatar slot="prepend">
            <img alt={name} src="https://picsum.photos/id/{i + 10}/200" />
          </Avatar>
          {name}
          <div slot="append" class:s-primary-text={unread}>
            <Icon path={mdiMessage} />
          </div>
        </ListItem>
      {/each}
    </List>
    <List>
      <span slot="title"> Previous Chats </span>
      {#each args.previous as { name }, i}
        <ListItem>
          <Avatar slot="prepend">
            <img alt={name} src="https://picsum.photos/id/{i + 20}/200" />
          </Avatar>
          {name}
          <div slot="append">
            <Icon path={mdiMessage} />
          </div>
        </ListItem>
      {/each}
    </List>
  </div>
</Story>

<style>
  .container {
    width: 400px;
    padding-top: 8px;
    padding-bottom: 8px;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14),
      0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }
</style>
