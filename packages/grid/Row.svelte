<script>
  /**
   * The classes to add to the row.
   * @type {string}
   */
  let klass = '';
  export { klass as class };
</script>

<div class="s-row {klass}">
  <slot />
</div>

<style svelterial>
  .s-row {
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
</style>
