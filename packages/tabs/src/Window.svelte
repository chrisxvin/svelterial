<script context="module">
  export const WINDOW = {};
</script>

<script>
  import { setContext } from 'svelte';
  import { derived, writable } from 'svelte/store';
  import { quadInOut } from 'svelte/easing';

  /**
   * The classes to add to the window.
   */
  let klass = '';
  export { klass as class };

  /**
   * The store containing the 0 based index of the active window item.
   * @type {import('svelte/store').Writable}
   */
  export let value = writable(0);

  /**
   * The duration of the slide animation.
   */
  export let duration = 300;

  /**
   * The easing function of the slide animation.
   * @type {import('svelte/transition').EasingFunction}
   */
  export let easing = quadInOut;

  /**
   * If `true`, the sliding animation will be vertical.
   */
  export let vertical = false;

  /**
   * If `true`, the sliding animation will proceed in the opposite direction.
   */
  export let reverse = false;

  let startIndex = -1;

  /**
   * [previous active index, new active index]
   * @type {[number, number]}
   */
  const valueHistory = [0, 0];

  const direction = derived(
    value,
    (newValue) => {
      valueHistory.shift();
      valueHistory.push(newValue);
      return (newValue > valueHistory[0] ? 1 : -1) * (reverse ? -1 : 1);
    },
    0,
  );

  setContext(WINDOW, {
    value,
    axis: vertical ? 'Y' : 'X',
    direction,
    duration,
    easing,
    getIndex() {
      startIndex += 1;
      return startIndex;
    },
  });

  export function prev() {
    value.update((val) => (val > 0 ? val - 1 : val));
  }

  export function next() {
    value.update((val) => (val < startIndex ? val + 1 : val));
  }
</script>

<div class="s-window {klass}">
  <slot />
</div>

<style>
  :global(.s-window) {
    overflow: hidden;
    position: relative;
    width: 100%;
  }
</style>
