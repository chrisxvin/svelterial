<script>
  /**
   * @style {0 0 auto} --appbar-inset inset value for the appbar.
   */

  /**
   * The classes to add to the appbar.
   */
  let klass = '';
  export { klass as class };

  /**
   * The position of the bar.
   * @type {"relative" | "absolute" | "fixed"}
   */
  export let position = 'relative';

  /**
   * If `true`, the bar will have a small border radius.
   */
  export let rounded = false;

  /**
   * If `true`, there will be no shadow of the bar.
   */
  export let flat = false;

  /**
   * If `true`, reduces the height and padding of the bar.
   */
  export let dense = false;

  /**
   * If `true`, increases the height of the bar and makes it prominent.
   */
  export let prominent = false;

  /**
   * If `true`, makes the app bar the full height and with of the container.
   */
  export let fluid = false;

  /**
   * If `true`, makes the app bar collapsed.
   */
  export let collapsed = false;
</script>

<header
  class="s-appbar s-appbar--{position} {klass}"
  class:s-appbar--rounded={rounded}
  class:s-appbar--flat={flat}
  class:s-appbar--dense={dense}
  class:s-appbar--prominent={prominent}
  class:s-appbar--fluid={fluid}
  class:s-appbar--collapsed={collapsed}>
  <div class="s-appbar__wrapper">
    <slot name="icon" />
    {#if !collapsed}
      <div class="s-appbar__title">
        <slot name="title" />
      </div>
    {/if}
    <slot />
  </div>
  <slot name="extension" />
</header>

<style svelterial="../styles/AppBar.scss">
</style>
