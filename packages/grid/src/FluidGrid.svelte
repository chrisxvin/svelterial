<script>
  /**
   * The classes to add to the grid.
   */
  let klass = '';
  export { klass as class };

  /**
   * The minimum size of the grid cells.
   */
  export let minSize = '300px';

  /**
   * The grid gap.
   */
  export let gap = '8px';
</script>

<div class="s-grid {klass}" style="--s-minSize:{minSize};gap:{gap}">
  <slot />
</div>

<style svelterial="../styles/FluidGrid.scss">
</style>
