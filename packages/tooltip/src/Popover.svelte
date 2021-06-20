<script>
  import { createPopper } from '@popperjs/core';
  import { onMount } from 'svelte';

  export let active = false;
  export let placement = 'bottom';
  export let offset = [0, 10];
  export let strategy = 'absolute';
  export let triggers = ['click:toggle'];

  /** @type {Element} */
  let container;
  /** @type {Element} */
  let popover;
  /** @type {Element} */
  let arrow;
  /** @type {import('@popperjs/core').Instance} */
  let instance;

  export function show() {
    active = true;
    instance.setOptions(createOptions(true));
  }

  export function hide() {
    active = false;
    instance.setOptions(createOptions(false));
  }

  export function toggle() {
    if (active) hide();
    else show();
  }

  const createOptions = (isListening) => ({
    strategy,
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset,
        },
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['bottom', 'top', 'left', 'right'],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrow,
          padding: 8,
        },
      },
      {
        name: 'eventListeners',
        enabled: isListening,
      },
    ],
  });

  const events = {
    open,
    close,
    toggle,
  };

  onMount(() => {
    const target = container.firstChild;

    instance = createPopper(target, popover, createOptions(false));
    triggers
      .map((x) => x.split(':'))
      .forEach(([e, fn]) => {
        target.addEventListener(e, events[fn]);
      });

    return () => {
      triggers
        .map((x) => x.split(':'))
        .forEach(([e, fn]) => {
          target.removeEventListener(e, events[fn]);
        });
      instance.destroy();
    };
  });
</script>

<div class="s-popover__container" bind:this={container}>
  <slot name="target" />
</div>
<div class="s-popover" class:s-popover--active={active} bind:this={popover}>
  <div class="s-popover__arrow" bind:this={arrow} />
  <slot />
</div>

<style svelterial="../styles/Popover.scss"></style>
