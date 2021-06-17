<script>
  import { getContext } from 'svelte';
  import { COLLAPSE_CONTAINER } from './CollapseContainer.svelte';
  import { slide } from 'svelte/transition';

  const { value, index, multiple, mandatory } = getContext(COLLAPSE_CONTAINER);

  /**
   * The classes to add to the panel.
   */
  let klass = '';
  export { klass as class };

  /**
   * Options for the slide transition.
   */
  export let transition = {};

  /**
   * If `true`, the panel becomes readonly.
   */
  export let readonly = false;

  /**
   * If `true`, the panel becomes disabled.
   */
  export let disabled = false;

  const myIndex = index();
  $: active = Array.isArray($value) ? $value.includes(myIndex) : $value === myIndex;
  function toggle() {
    value.select(myIndex, { multiple, mandatory, max: Infinity });
  }
</script>

<div
  class="s-collapse-item {klass}"
  aria-expanded={active}
  aria-disabled={disabled}
  class:s-collapse-item--active={active}
  class:s-collapse-item--readonly={readonly}
  class:s-collapse-item--disabled={disabled}>
  <button
    class="s-collapse-item__header"
    tabindex={disabled ? -1 : null}
    on:click={toggle}>
    <slot name="header" />
    <div class="s-collapse-item__icon">
      <slot name="icon" {active}>1</slot>
    </div>
  </button>
  {#if active}
    <div class="s-collapse-item__content" role="region" transition:slide={transition}>
      <slot />
    </div>
  {/if}
</div>
