<script>
  import { writable } from 'svelte/store';
  import { createSelect } from '@svelterialjs/core/utils/Group.js';
  import ListItem from './ListItem.svelte';

  export let items = [];
  items = items.map((x) => (Array.isArray(x) ? x : [x, x]));

  export let multiple = false;
  export let mandatory = false;
  export let max = Infinity;
  export let value = writable(multiple ? [] : null);
  /**
   * @type {object}
   */
  export let props = { selectable: true };

  /**
   * @type {object}
   */
  export let activeProps = { active: true };

  value.select = createSelect(value.update);

  function isActive(val) {
    return Array.isArray($value) ? $value.includes(val) : val === $value;
  }
</script>

{#each items as [val, item]}
  <ListItem
    on:click={value.select(val, { multiple, mandatory, max })}
    {...props}
    {...isActive(val, $value) ? activeProps : {}}>
    <slot name="prepend" slot="prepend" />
    <slot {item} />
    <slot name="subtitle" slot="subtitle" />
    <slot name="append" slot="append" />
  </ListItem>
{/each}
