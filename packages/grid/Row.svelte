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
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    margin-bottom: -0.75rem;
  }
</style>
