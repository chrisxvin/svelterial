<script>
  /**
   * The classes to add to the icon.
   */
  let klass = '';
  export { klass as class };

  /**
   * The size of the icon.
   */
  export let size = '24px';

  /**
   * The viewBox if `path` value is present.
   */
  export let viewBox = '0 0 24 24';

  /**
   * If `true`, the icon will be spinning.
   */
  export let spin = false;

  /**
   * If `true`, the icon will be disabled.
   */
  export let disabled = false;

  /**
   * An svg path.
   * @type {string}
   */
  export let path = null;
</script>

<i
  aria-hidden="true"
  class="s-icon {klass}"
  class:is-spinning={spin}
  class:s-icon-disabled={disabled}
  style="font-size:{size};">
  {#if path}
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {viewBox}>
      <path d={path} />
    </svg>
  {/if}
  <slot />
</i>

<style svelterial="../styles/Icon.scss">
</style>
