<script>
  /**
   * The classes to add to the grid cell.
   */
  let klass = '';
  export { klass as class };

  /**
   * The column span of the cell.
   */
  export let col = 1;

  /**
   * The row span of the cell.
   */
  export let row = 1;
</script>

<div class="s-gridcell {klass}" style="--s-colspan:{col};--s-rowspan:{row};">
  <slot />
</div>

<style svelterial="./styles/GridCell.scss">
</style>
