<script context="module">
  export const COLLAPSE_CONTAINER = {};
</script>

<script>
  import { createEventDispatcher, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  // Classes to add to panel container.
  let klass = '';
  export { klass as class };

  // 0 based indices of the active panels.
  export let value = [];

  // Make multiple panels active at the same time.
  export let multiple = false;

  // Make is necessary for at least one panel to be selected.
  export let mandatory = false;

  // Accordion style panels.
  export let accordion = false;

  // Make panels popout when active.
  export let popout = false;

  // Make panels inset when active.
  export let inset = false;

  // Remove shadow from panels.
  export let flat = false;

  // Remove border radius from panels.
  export let tile = false;

  const dispatch = createEventDispatcher();
  const values = writable(value);

  $: values.set(value);

  let startIndex = -1;

  setContext(COLLAPSE_CONTAINER, {
    values,
    selectPanel: (index) => {
      if (value.includes(index)) {
        if (!(mandatory && value.length === 1)) {
          value.splice(value.indexOf(index), 1);
          value = value;
          dispatch('change', { index, active: false });
        }
      } else {
        if (multiple) {
          value.push(index);
          value = value;
        } else {
          value = [index];
        }
        dispatch('change', { index, active: true });
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
  class:accordion
  class:popout
  class:inset
  class:flat
  class:tile>
  <slot />
</div>

<style svelterial="./styles/CollapseContainer.scss">
</style>
