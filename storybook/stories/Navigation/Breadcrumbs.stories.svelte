<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Breadcrumbs } from '@svelterialjs/navigation';
</script>

<Meta
  title="Components/Navigation/Breadcrumbs"
  component={Breadcrumbs}
  argTypes={metadata('navigation/Breadcrumbs')} />

<Story
  id="a"
  name="Breadcrumbs"
  let:args
  args={{
    items: [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3', class: 's-primary-text' },
    ],
    slot_divider: '/',
  }}>
  <Breadcrumbs {...args}>
    <svelte:fragment slot="divider">
      {args.slot_divider}
    </svelte:fragment>
  </Breadcrumbs>
</Story>
