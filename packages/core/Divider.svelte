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

<style svelterial>
  .s-divider {
    display: block;
    flex: 1 1 0;
    max-width: 100%;
    height: 0;
    max-height: 0;
    border: solid;
    border-width: thin 0 0 0;
    border-color: hsla(var(--s-contrast), calc(var(--s-contrastOffset) * 3));
    transition: inherit;
  }

  .s-divider--inset:not(.s-divider--vertical) {
    max-width: calc(100% - 72px);
    margin-left: 72px;
  }

  .s-divider--vertical {
    align-self: stretch;
    border: solid;
    border-width: 0 thin 0 0;
    display: inline-flex;
    height: inherit;
    min-height: 100%;
    max-height: 100%;
    max-width: 0;
    width: 0;
    vertical-align: text-bottom;
  }
  .s-divider--inset {
    margin-top: 8px;
    min-height: 0;
    max-height: calc(100% - 16px);
  }
</style>
