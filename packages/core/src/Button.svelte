<script>
  import A from '../helpers/_a.svelte';
  import BUTTON from '../helpers/_button.svelte';
  import Ripple from '../utils/Ripple.js';

  import { current_component } from 'svelte/internal';
  import ForwardEvents from '../utils/ForwardEvents';
  const events = ForwardEvents(current_component);

  /**
   * @restProps {a | button}
   */

  /**
   * The classes to add to the button.
   */
  let klass = '';
  export { klass as class };

  /**
   * The variant to use.
   * @type {"raised" | "fab" | "icon"}
   */
  export let variant = 'raised';

  /**
   * The size of the button.
   * @type {"x-small" | "small" | "default" | "large" | "x-large"}
   */
  export let size = 'default';

  /**
   * If `true`, the button will have an outline.
   */
  export let outlined = false;

  /**
   * If `true`, the button will not have any background color.
   */
  export let text = false;

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

  /**
   * If `true`, then button has no shadow.
   */
  export let flat = false;

  /**
   * If `true`, the button will have lower opacity when NOT in focus/hover.
   */
  export let dim = false;

  /**
   * Makes the component a link and assigns the _href_ tag.
   */
  export let href = null;

  /**
   * Options to pass to the Ripple action.
   */
  export let ripple = {};

  /**
   * Actions to pass to the component.
   */
  export let use = [];

  const clsx = (list) => list.filter(Boolean).join(' ');
</script>

<svelte:component
  this={href ? A : BUTTON}
  {href}
  class={clsx([
    `s-btn s-btn--${variant} s-btn--${size}`,
    outlined && 's-btn--outlined',
    text && 's-btn--text',
    block && 's-btn--block',
    rounded && 's-btn--rounded',
    tile && 's-btn--tile',
    flat && 's-btn--flat',
    dim && 's-btn--dim',
    klass,
  ])}
  {...$$restProps}
  use={[[Ripple, ripple], events, ...use]}>
  <span class="s-btn__content">
    <slot />
  </span>
</svelte:component>

<style svelterial="../styles/Button.scss">
</style>
