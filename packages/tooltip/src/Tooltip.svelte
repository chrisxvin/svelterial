<script>
  /**
   * @style {0s} --tooltip-delay The delay from when the target is hovered to the tooltip appearing.
   */

  import { createPopper } from '@popperjs/core';
  import { onMount } from 'svelte';

  let klass = '';
  export { klass as class };

  /**
   * @type {string}
   */
  export let tip;
  export let placement = 'bottom';
  export let offset = 8;
  export let strategy = 'absolute';

  /** @type {Element} */
  let tooltip;
  /** @type {Node} */
  let container;
  onMount(() => {
    const target = container.firstChild;
    const instance = createPopper(target, tooltip, {
      strategy,
      placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, offset],
          },
        },
        { name: 'eventListeners', enabled: false },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['bottom', 'top', 'left', 'right'],
          },
        },
      ],
    });

    function show() {
      tooltip.classList.add('s-tooltip--visible');
      instance.update();
    }

    function hide() {
      tooltip.classList.remove('s-tooltip--visible');
    }

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach((event) => {
      target.addEventListener(event, show, { passive: true });
    });
    hideEvents.forEach((event) => {
      target.addEventListener(event, hide, { passive: true });
    });

    return () => {
      showEvents.forEach((event) => {
        target.removeEventListener(event, show);
      });
      hideEvents.forEach((event) => {
        target.removeEventListener(event, hide);
      });
      instance.destroy();
    };
  });
</script>

<div class="s-tooltip__container" bind:this={container}>
  <slot />
</div>
<div class="s-tooltip {klass}" role="tooltip" bind:this={tooltip}>
  {tip}
</div>

<style svelterial="../styles/Tooltip.scss"></style>
