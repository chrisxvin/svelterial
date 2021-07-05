<script>
  import SlideGroup from '@svelterialjs/slide-group/src/SlideGroup.svelte';
  import { writable } from 'svelte/store';
  import Window from './Window.svelte';

  /** @type {Element} */
  let slider;
  /** @type {Element} */
  let tabContainer;
  // /** @type {Element[]} */
  // let tabs;

  let klass = '';
  export { klass as class };
  export let value = writable(0);
</script>

<div class="s-tabs">
  <div bind:this={tabContainer} class="s-tabs-bar {klass}">
    <SlideGroup mandatory={true} {value}>
      <slot name="tabs" />
    </SlideGroup>
    <div bind:this={slider} class="s-tabs-slider" />
  </div>
  <Window {value}>
    <slot />
  </Window>
</div>

<style svelterial="../styles/Tabs.scss"></style>
