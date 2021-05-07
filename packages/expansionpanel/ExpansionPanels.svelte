<script context="module">
  export const EXPANSION_PANELS = {};
</script>

<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  /**
   * The classes to add to panel container.
   */
  let klass = '';
  export { klass as class };

  /**
   * 0 based indices of the active panels.
   */
  export let value = writable([]);

  /**
   * If `true` then multiple panels active at the same time.
   */
  export let multiple = false;

  /**
   * If `true` then it is necessary for at least one panel to be selected.
   */
  export let mandatory = false;

  /**
   * If `true` then the panels are accordion style.
   */
  export let accordion = false;

  /**
   * If `true` then it makes panels popout when active.
   */
  export let popout = false;

  /**
   * If `true` then it makes panels inset when active.
   */
  export let inset = false;

  /**
   * If `true` then it removes shadow from panels.
   */
  export let flat = false;

  /**
   * If `true` then it remove border radius from panels.
   */
  export let tile = false;

  let startIndex = -1;
  setContext(EXPANSION_PANELS, {
    values: value,
    selectPanel: (index) => {
      if ($value.includes(index)) {
        if (!(mandatory && $value.length === 1)) {
          $value.splice(value.indexOf(index), 1);
          $value = $value;
        }
      } else {
        if (multiple) {
          $value.push(index);
          $value = $value;
        } else {
          $value = [index];
        }
      }
    },
    index: () => {
      startIndex += 1;
      return startIndex;
    },
  });
</script>

<div
  class="s-expansion-panels {klass}"
  class:s-expansion-panels--accordion={accordion}
  class:s-expansion-panels--popout={popout}
  class:s-expansion-panels--inset={inset}
  class:s-expansion-panels--flat={flat}
  class:s-expansion-panels--tile={tile}>
  <slot />
</div>

<style svelterial="./styles/ExpansionPanels.scss"></style>
