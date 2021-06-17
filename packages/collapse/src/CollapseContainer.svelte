<script context="module">
  export const COLLAPSE_CONTAINER = {};
</script>

<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { createSelect } from '@svelterialjs/core/utils/Group';

  /**
   * The classes to add to the collapse container.
   */
  let klass = '';
  export { klass as class };

  /**
   * 0 based indices of the active panel(s).
   */
  export let value = writable(null);

  /**
   * If `true`, multiple panels can be active at the same time.
   */
  export let multiple = true;

  /**
   * If `true`, it is necessary for at least one panel to be selected.
   */
  export let mandatory = false;

  /**
   * If `true`, the active panels will not have space between others.
   */
  export let accordion = false;

  /**
   * If `true`, then panels will popout when active.
   */
  export let popout = false;

  /**
   * If `true`, then panels will do the opposite of popout when active.
   */
  export let inset = false;

  value.select = createSelect(value.update);
  let startIndex = -1;

  setContext(COLLAPSE_CONTAINER, {
    value,
    index: () => {
      startIndex += 1;
      return startIndex;
    },
    multiple,
    mandatory,
  });
</script>

<div
  class="s-collapse {klass}"
  class:s-collapse--accordion={accordion}
  class:s-collapse--popout={popout}
  class:s-collapse--inset={inset}>
  <slot />
</div>

<style svelterial="../styles/CollapseContainer.scss">
</style>
