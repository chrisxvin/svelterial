<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import Overlay from '@svelterialjs/core/src/Overlay.svelte';
</script>

<Meta
  title="Components/Core/Overlay"
  component={Overlay}
  argTypes={metadata('core/Overlay')} />

<Story id="overlay" name="Overlay" let:args>
  <div>
    <Overlay {...args}>
      {args.slot_default}
    </Overlay>
  </div>
</Story>

<style>
  div {
    position: relative;
    height: 200px;
    width: 200px;
  }
</style>
