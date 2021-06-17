<script>
  import { writable } from 'svelte/store';
  import { createSelect } from '@svelterialjs/core/utils/Group.js';
  import ListItem from './ListItem.svelte';
  import { onDestroy } from 'svelte';

  export let items = [];
  export let value = writable(null);
  export let multiple = false;
  export let mandatory = false;
  export let max = Infinity;
  /**
   * @type {object}
   */
  export let props = { selectable: true };

  /**
   * @type {object}
   */
  export let activeProps = { active: true };

  const [select, destroySelect, isActive] = createSelect(value);
  onDestroy(destroySelect);
</script>

{#each items as [val, item]}
  <ListItem
    on:click={select(val, { multiple, mandatory, max })}
    {...props}
    {...isActive(val, $value) ? activeProps : {}}>
    <slot name="prepend" slot="prepend" />
    <slot {item} />
    <slot name="subtitle" slot="subtitle" />
    <slot name="append" slot="append" />
  </ListItem>
{/each}
