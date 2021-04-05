<script>
  let klass = '';
  export { klass as class };

  /**
   * The variant to use.
   * @type {"raised" | "outline" | "flat" | "fab" | "icon"}
   */
  export let variant = 'raised';

  /**
   * The size of the button.
   * @type {"x-small" | "small" | "default" | "large" | "x-large"}
   */
  export let size = 'default';

  /**
   * If `true`, the button will take up the full width of its container.
   */
  export let block = false;

  /**
   * If `true`, the corners of the button become fully rounded.
   */
  export let rounded = false;

  /**
   * If `true`, the button has no border radius.
   */
  export let tile = false;
</script>

<button
  class="s-btn s-btn--{variant} s-btn--{size} {klass}"
  class:s-btn--block={block}
  class:s-btn--rounded={rounded}
  class:s-btn--tile={tile}
  {...$$restProps}>
  <span class="s-btn__content">
    <slot />
  </span>
</button>

<style svelterial from="./Button.scss">
</style>
