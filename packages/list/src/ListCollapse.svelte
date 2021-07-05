<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  export let active = false;
  export let triggers = ['click:toggle'];
  export let indent = '0px';
  export let transition = {};

  export function toggle() {
    active = !active;
  }

  export function show() {
    active = true;
  }

  export function hide() {
    active = false;
  }

  /** @type {Element} */
  let container;

  onMount(() => {
    const events = triggers.map((x) => x.split(':'));
    const eventsMap = {
      toggle,
      show,
      hide,
    };
    const trigger = container.querySelector('.s-listitem');
    events.forEach(([e, fn]) => {
      trigger.addEventListener(e, eventsMap[fn]);
    });
    return () => {
      events.forEach(([e, fn]) => {
        trigger.removeEventListener(e, eventsMap[fn]);
      });
    };
  });
</script>

<div class="s-listcollapse__trigger" bind:this={container}>
  <slot name="trigger" {active} />
</div>
{#if active}
  <div
    class="s-listcollapse__items"
    transition:slide={transition}
    style="--list-indent:{indent};">
    <slot />
  </div>
{/if}

<style>
  .s-listcollapse__trigger {
    display: contents;
  }
</style>
