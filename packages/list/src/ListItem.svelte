<script>
  import Ripple from '@svelterialjs/core/utils/Ripple.js';
  let klass = '';
  export { klass as class };

  export let dense = false;
  export let nav = false;
  export let selectable = false;
  export let flat = false;
  export let rounded = false;
  export let ripple = selectable ? {} : null;
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
  <slot name="prepend" />
  <div class="s-listitem__content">
    <div class="s-listitem__title">
      <slot />
    </div>
    <div class="s-listitem__subtitle">
      <slot name="subtitle" />
    </div>
  </div>
  <slot name="append" />
</div>

<style svelterial="../styles/ListItem.scss"></style>
