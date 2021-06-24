<script context="module">
  export const WINDOW = {};
</script>

<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let vertical = false;
  export let reverse = false;

  const value = writable(0);
  const direction = writable(0);
  let startIndex = -1;

  setContext(WINDOW, {
    value,
    axis: vertical ? 'Y' : 'X',
    direction,
    getIndex() {
      startIndex += 1;
      return startIndex;
    },
  });

  export function prev() {
    value.update((val) => {
      direction.set(-1 * (reverse ? -1 : 1));
      return val > 0 ? val - 1 : val;
    });
  }

  export function next() {
    value.update((val) => {
      direction.set(1 * (reverse ? -1 : 1));
      return val < startIndex ? val + 1 : val;
    });
  }
</script>

<div class="s-window">
  <slot />
</div>

<style>
  :global(.s-window) {
    overflow: hidden;
    position: relative;
    width: 100%;
  }
</style>
