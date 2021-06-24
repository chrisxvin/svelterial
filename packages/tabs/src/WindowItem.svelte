<script>
  import { WINDOW } from './Window.svelte';
  import { getContext } from 'svelte';

  const { value, axis, direction, getIndex } = getContext(WINDOW);
  const index = getIndex();

  const slideIn = () => ({
    duration: 300,
    css: (t) => `transform: translate${axis}(${100 * (1 - t) * $direction}%);`,
  });

  const slideOut = () => ({
    duration: 300,
    css: (t) => `transform: translate${axis}(${100 * (t - 1) * $direction}%);`,
  });
</script>

{#if $value === index}
  <div class="s-window-item" in:slideIn out:slideOut>
    <slot />
  </div>
{/if}

<style>
  :global(.s-window-item) {
    width: 100%;
    float: left;
    margin-right: -100%;
    backface-visibility: hidden;
  }
</style>
