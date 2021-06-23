<script context="module">
  /** @type {string[][]} */
  let breakpoints;

  /**
   * @param {Element} node
   * @param {string[]} range
   */
  function Observer(node, range) {
    if (!breakpoints) {
      const style = getComputedStyle(node);
      breakpoints = range.reduceRight((acc, i) => {
        acc.push([i, parseInt(style.getPropertyValue(`--${i}`))]);
        return acc;
      }, []);
    }

    const observer = new ResizeObserver((entries) => {
      const bodySize = entries[0].contentRect.width;
      const [name] = breakpoints.find(([, size]) => size <= bodySize);
      node.dispatchEvent(new CustomEvent('change', { detail: { name, bodySize } }));
    });

    observer.observe(document.body);

    return {
      destroy: observer.disconnect,
    };
  }
</script>

<script>
  export let range = ['xs', 'sm', 'md', 'lg', 'xl'];
</script>

<div class="s-screenobserver" on:change use:Observer={range} />

<style svelterial="../styles/Screen.scss">
</style>
