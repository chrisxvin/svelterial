<script>
  import { getContext } from 'svelte';
  import { COLLAPSE_CONTAINER } from './CollapseContainer.svelte';
  import { slide } from 'svelte/transition';
  import Icon from '@svelterialjs/core/src/Icon.svelte';

  const { values, selectPanel, index } = getContext(COLLAPSE_CONTAINER);

  // Classes to add to the panel.
  let klass = '';
  export { klass as class };

  // Options for the slide transition.
  export let slideOpts = {};

  // Make the panel readonly.
  export let readonly = false;

  // Disable the panel.
  export let disabled = false;

  // Styles to add to the panel.
  export let style = null;

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
  class:active
  class:readonly
  class:disabled
  {style}>
  <button
    type="button"
    class="s-expansion-panel__header"
    tabindex={disabled ? -1 : null}
    on:click={toggle}>
    <!-- Slot for the title of panel. -->
    <slot name="header" />
    <div class="s-expansion-panel__icon">
      <!-- Slot for the icon at the right of the header. -->
      <slot name="icon" {active}>
        <Icon {disabled} rotate={active ? 180 : 0} />
      </slot>
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

<style svelterial="../styles/Collapse.scss">
</style>
