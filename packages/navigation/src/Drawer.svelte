<script>
  /**
   * The classes to add to the drawer.
   */
  let klass = '';
  export { klass as class };

  /**
   * The width of the drawer.
   */
  export let width = '256px';

  /**
   * The width of the drawer.
   */
  export let height = '100vh';

  /**
   * If `true`, then drawer will have a small width.
   */
  export let mini = false;

  /**
   * The position of the bar.
   * @type {"relative" | "absolute" | "fixed"}
   */
  export let position = 'relative';

  /**
   * The edge of the screen where the drawer is anchored.
   * @type {"left" | "right"}
   */
  export let edge = 'left';

  /**
   * If `true`, the drawer will show a border line.
   */
  export let border = false;

  /**
   * If `false`, then the drawer will be translated -100% to the left.
   */
  export let active = true;
</script>

<div
  class="s-drawer s-drawer--{position} s-drawer--{edge} {klass}"
  class:s-drawer--mini={mini}
  class:s-drawer--border={border}
  class:s-drawer--active={active}
  style="--drawer-width:{width};--drawer-height:{height};">
  <slot />
</div>

<style svelterial="../styles/Drawer.scss"></style>
