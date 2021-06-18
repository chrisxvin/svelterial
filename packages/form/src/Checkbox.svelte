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
        <path class="s-checkbox__icon" />
      </svg>
    </div>
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style svelterial="../styles/Checkbox.scss">
</style>
