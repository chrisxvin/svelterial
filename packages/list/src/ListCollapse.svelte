<script>
  import { slide } from 'svelte/transition';

  export let active = false;
  export let transition = {};

  function toggle() {
    active = !active;
  }
</script>

<slot name="trigger" {active} {toggle} />
{#if active}
  <div transition:slide={transition}>
    <slot />
  </div>
{/if}
