<script>
  import Ripple from '@svelterialjs/core/utils/Ripple.js';

  /**
   * The classes to add to the list item.
   */
  let klass = '';
  export { klass as class };

  /**
   * If `true`, the list item will have reduced size.
   */
  export let dense = false;

  /**
   * If `true`, the list item will have the styling of a nav item.
   */
  export let nav = false;

  /**
   * If `true`, then you can select the list item.
   */
  export let selectable = false;

  /**
   * If `true`, then list item will have no background when active.
   */
  export let flat = false;

  /**
   * If `true`, then the list item has rounded borders.
   */
  export let rounded = false;

  /**
   * The options passed to the ripple action.
   */
  export let ripple = selectable ? {} : null;

  /**
   * If `true`, then the list item is considered active.
   */
  export let active = false;
</script>

<div
  class="s-listitem {klass}"
  class:s-listitem--dense={dense}
  class:s-listitem--nav={nav}
  class:s-listitem--selectable={selectable}
  class:s-listitem--flat={flat}
  class:s-listitem--rounded={rounded}
  class:s-listitem--active={active}
  use:Ripple={ripple}>
  <div class="s-listitem__prepend">
    <slot name="prepend" />
  </div>
  <div class="s-listitem__content">
    <div class="s-listitem__title">
      <slot />
    </div>
    <div class="s-listitem__subtitle">
      <slot name="subtitle" />
    </div>
  </div>
  <div class="s-listitem__append">
    <slot name="append" />
  </div>
</div>

<style svelterial="../styles/ListItem.scss"></style>
