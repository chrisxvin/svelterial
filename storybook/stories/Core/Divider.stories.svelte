<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import Divider from '@svelterialjs/core/src/Divider.svelte';
</script>

<Meta
  title="Components/Core/Divider"
  component={Divider}
  argTypes={metadata('core/Divider')} />

<Story id="a" name="Divider" let:args>
  <div>
    <Divider {...args} />
  </div>
</Story>

<style>
  div {
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
