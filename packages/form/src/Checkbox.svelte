<script>
  import { uid } from 'uid';
  import Ripple from '@svelterialjs/core/utils/Ripple.js';
  import ForwardEvents from '@svelterialjs/core/utils/ForwardEvents.js';
  import { current_component } from 'svelte/internal';

  const events = ForwardEvents(current_component);

  let klass = '';
  export { klass as class };
  export let checked = false;
  export let indeterminate = false;
  export let value = null;
  export let group = null;
  export let id = `s-checkbox-${uid(4)}`;

  function updateGroup() {
    if (Array.isArray(group) && value != null) {
      if (group.includes(value)) group.splice(group.indexOf(value), 1);
      else group.push(value);
      group = group;
    }
  }

  function updateState() {
    if (Array.isArray(group) && value != null) {
      checked = group.includes(value);
    }
  }

  $: updateState(group);
</script>

<div class="s-checkbox {klass}">
  <div class="s-checkbox__wrapper" use:Ripple={{ centered: true }}>
    <input
      class="s-checkbox__input"
      type="checkbox"
      role="checkbox"
      aria-checked={checked}
      bind:checked
      bind:indeterminate
      {id}
      {value}
      on:change={updateGroup}
      use:events />
    <div class="s-checkbox__box" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          class="s-checkbox__checked"
          d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        <path class="s-checkbox__indeterminate" d="M5,11L5,13L19,13L19,11L5,11Z" />
      </svg>
    </div>
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style svelterial="../styles/Checkbox.scss">
</style>
