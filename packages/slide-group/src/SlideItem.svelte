<script>
  import { isActive } from '@svelterialjs/core/utils/Group';
  import { getContext } from 'svelte';
  import { SLIDE_GROUP } from './SlideGroup.svelte';

  const { select, getIndex, value } = getContext(SLIDE_GROUP);

  const index = getIndex();

  /** @type {Element} */
  let item;

  let klass = '';
  export { klass as class };
  export let disabled = null;

  function selectItem() {
    if (!disabled) select(item, index);
  }
</script>

<div bind:this={item} class="s-slide-item {klass}" on:click={selectItem}>
  <slot active={isActive($value, index)} />
</div>
