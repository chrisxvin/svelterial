<script>
  /**
   * The classes to add to the alert.
   * @type {string}
   */
  let klass = '';
  export { klass as class };

  /**
   * If `true`, then the alert will be smaller and have less padding.
   */
  export let dense = false;

  /**
   * If `true`, then alert will have an outline.
   */
  export let outlined = false;

  /**
   * If `true`, then the alert.
   */
  export let text = false;

  /**
   * If `true`, then the alert will have no border radius.
   */
  export let tile = false;

  /**
   * Specifies the orientation of the border.
   * @type {false | "top" | "bottom" | "left" | "right"}
   */
  export let border = false;

  /**
   * If `true`, then the border will be colored.
   */
  export let coloredBorder = false;
</script>

<div
  role="alert"
  class="s-alert {klass}"
  class:s-alert--dense={dense}
  class:s-alert--outlined={outlined}
  class:s-alert--text={text}
  class:s-alert--tile={tile}
  class:s-alert--colored-border={coloredBorder}>
  <div class="s-alert__wrapper">
    <slot name="prepend" />
    <div class="s-alert__content">
      <slot />
    </div>
    <slot name="append" />
    {#if border}
      <div class="s-alert__border is-border-{border}" />
    {/if}
  </div>
</div>

<style svelterial="./styles/Alert.scss"></style>
