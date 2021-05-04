<script>
  /**
   * The classes to add to the divider.
   */
  let klass = '';
  export { klass as class };

  /**
   * If `true`, then adds indentation for dividers.
   */
  export let inset = false;

  /**
   * If `true`, then makes the divider vertical.
   */
  export let vertical = false;
</script>

<hr
  class="s-divider {klass}"
  role="separator"
  aria-orientation={vertical ? 'vertical' : 'horizontal'}
  class:s-divider--inset={inset}
  class:s-divider--vertical={vertical} />

<style svelterial="./styles/Divider.scss"></style>
