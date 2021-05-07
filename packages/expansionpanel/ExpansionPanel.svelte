<script>
  import { getContext } from 'svelte';
  import { EXPANSION_PANELS } from './ExpansionPanels.svelte';
  import { slide } from 'svelte/transition';

  const { values, selectPanel, index } = getContext(EXPANSION_PANELS);

  // Classes to add to the panel.
  let klass = '';
  export { klass as class };

  // Options for the slide transition.
  export let slideOpts = {};

  // Make the panel readonly.
  export let readonly = false;

  const value = index();
  let active = false;

  function toggle() {
    selectPanel(value);
  }

  // Checking if panel is active everytime the value has changed.
  $: active = $values.includes(value);
</script>

<div
  class="s-expansion-panel {klass}"
  aria-expanded={active}
  class:s-expansion-panel--active={active}
  class:s-expansion-panel--readonly={readonly}>
  <button type="button" class="s-expansion-panel__header" on:click={toggle}>
    <slot name="header" />
    <div class="s-expansion-panel__icon">
      <slot name="icon" {active} />
    </div>
  </button>
  {#if active}
    <div
      class="s-expansion-panel__content"
      transition:slide={slideOpts}
      on:introstart
      on:outrostart
      on:introend
      on:outroend>
      <slot />
    </div>
  {/if}
</div>

<style svelterial="./styles/ExpansionPanel.scss">
</style>
