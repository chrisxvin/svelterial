<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Icon } from '@svelterialjs/core';
  import { ListItem } from '@svelterialjs/list';
  import { mdiHome, mdiAccount } from '@mdi/js';
</script>

<Meta
  title="Components/List/ListItem"
  component={ListItem}
  argTypes={metadata('list/ListItem')}
  args={{ slot_default: 'This is the ListItem content.', slot_subtitle: 'Subtitle' }} />

<Story name="Basic" let:args>
  <ListItem {...args}>
    {args.slot_default}
    <svelte:fragment slot="subtitle">
      {args.slot_subtitle}
    </svelte:fragment>
  </ListItem>
</Story>

<Story name="With Icons" let:args>
  <ListItem {...args}>
    <Icon slot="prepend" path={mdiHome} />
    <Icon slot="append" path={mdiAccount} />
    {args.slot_default}
    <svelte:fragment slot="subtitle">
      {args.slot_subtitle}
    </svelte:fragment>
  </ListItem>
</Story>
