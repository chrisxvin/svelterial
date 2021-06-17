<script>
  /**
   * @style {0px} --list-indent Indentation of the list.
   */

  /**
   * The classes to add to the list.
   */
  let klass = '';
  export { klass as class };
</script>

<div class="s-list {klass}">
  {#if $$slots.title}
    <span class="s-list__title">
      <slot name="title" />
    </span>
  {/if}
  <slot />
</div>

<style svelterial>
  .s-list {
    margin: 0;
    position: relative;
  }

  .s-list__title {
    display: block;
    padding: 8px 16px;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--s-text-secondary);
  }
</style>
