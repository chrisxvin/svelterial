<script>
  import { fade } from 'svelte/transition';
  import { current_component } from 'svelte/internal';
  import ForwardEvents from '../utils/ForwardEvents';
  const events = ForwardEvents(current_component);

  /**
   * @style --overlay-opacity The opacity of the overlay.
   * @default 0.46
   *
   * @style --overlay-color The background colot of the overlay.
   * @default rgb(33,33,33)
   *
   * @style --overlay-index The z-index of the overlay.
   * @default 5
   */

  /**
   * The classes to add to the overlay.
   */
  let klass = '';
  export { klass as class };

  /**
   * If `true`, then overlay will occupy space in container and not the whole page.
   */
  export let absolute = false;

  export let fadein = {};

  export let fadeout = {};
</script>

<div
  class="s-overlay {klass}"
  in:fade={fadein}
  out:fade={fadeout}
  class:s-overlay--absolute={absolute}
  use:events>
  <div class="s-overlay__scrim" />
  <div class="s-overlay__content">
    <slot />
  </div>
</div>

<style svelterial>
  .s-overlay {
    align-items: center;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: auto;
    z-index: var(--overlay-index, 2);
  }

  .s-overlay__scrim {
    border-radius: inherit;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: inherit;
    width: 100%;
    will-change: opacity;
    background-color: var(--overlay-color, rgb(33, 33, 33));
    opacity: var(--overlay-opacity, 0.46);
  }

  .s-overlay__content {
    position: relative;
  }

  .s-overlay--absolute {
    position: absolute;
  }
</style>
