<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Tabs, Tab, WindowItem } from '@svelterialjs/tabs';
</script>

<Meta title="Components/Tabs/Tabs" parameters={{ layout: 'padded' }} />

<Story name="Basic">
  <Tabs>
    <svelte:fragment slot="tabs">
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </svelte:fragment>
    <WindowItem>Item Content 1</WindowItem>
    <WindowItem>Item Content 2</WindowItem>
    <WindowItem>Item Content 3</WindowItem>
  </Tabs>
</Story>
