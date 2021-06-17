<script context="module">
  let breakpoints;
</script>

<script>
  import { createEventDispatcher, onMount } from 'svelte';

  let elem;
  const dispatch = createEventDispatcher();

  function observe() {
    const observer = new ResizeObserver((entries) => {
      const bodySize = entries[0].contentRect.width;
      const [name] = breakpoints.find(([, size]) => parseInt(size) <= bodySize);
      dispatch('change', { name, bodySize });
    });
    observer.observe(document.body);
    return observer.disconnect;
  }

  onMount(() => {
    if (!breakpoints) {
      const style = getComputedStyle(elem);
      breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'].reduceRight((acc, i) => {
        acc.push([i, style.getPropertyValue(`--${i}`)]);
        return acc;
      }, []);
    }
    observe();
  });
</script>

<div class="s-screenobserver" bind:this={elem} />

<style svelterial="../styles/Screen.scss">
</style>
