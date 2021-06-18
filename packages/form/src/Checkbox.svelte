<script>
  import { uid } from 'uid';
  import Ripple from '@svelterialjs/core/utils/Ripple.js';

  // Add class to checkbox wrapper.
  let klass = '';
  export { klass as class };

  // Get/Set checked state.
  export let checked = false;

  // Get/Set indeterminate state.
  export let indeterminate = false;

  // The value for the checkbox.
  export let value = null;

  // Combines components into a single group.
  export let group = null;

  // Id for the checkbox, defaults to a random uid.
  export let id = `s-checkbox-${uid(4)}`;

  const check = 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z';
  const dash = 'M4,11L4,13L20,13L20,11L4,11Z';

  function groupUpdate() {
    if (Array.isArray(group) && value != null) {
      if (group.includes(value)) group.splice(group.indexOf(value), 1);
      else group.push(value);
      group = group;
    }
  }

  function checkIfActive() {
    if (group.includes(value)) checked = true;
    else checked = false;
  }

  $: checkIfActive(group);
</script>

<div class="s-checkbox {klass}">
  <div class="s-checkbox__wrapper" use:Ripple={{ centered: true }}>
    <input
      type="checkbox"
      role="checkbox"
      aria-checked={checked}
      bind:checked
      bind:indeterminate
      {id}
      {value}
      on:change={groupUpdate}
      on:change />
    <div class="s-checkbox__background" aria-hidden="true">
      {#if checked || indeterminate}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d={checked ? check : dash} />
        </svg>
      {/if}
    </div>
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style svelterial="../styles/Checkbox.scss">
</style>
