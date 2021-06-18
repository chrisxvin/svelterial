<script>
  import ForwardEvents from '@svelterialjs/core/utils/ForwardEvents.js';
  import { current_component } from 'svelte/internal';

  const events = ForwardEvents(current_component);

  /**
   * @style {var(--s-primary-base)} --switch-color The color for a checked switch.
   */

  import { uid } from 'uid';

  // Add class to switch wrapper.
  let klass = '';
  export { klass as class };

  /**
   * The value for the switch
   * @type {any}
   */
  export let value = null;

  /**
   * The group of switches.
   * @type {null | Array}
   */
  export let group = null;

  /**
   * The checked state of the switch.
   */
  export let checked = false;

  /**
   * If `true`, then makes the switch inset / apple style.
   */
  export let inset = false;

  /**
   * If `true`, the switch becomes smaller.
   */
  export let dense = false;

  /**
   * ID for the input element for the switch.
   * @type {string}
   */
  export let id = `s-switch-${uid(4)}`;

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

<div class="s-switch {klass}">
  <div
    class="s-switch__wrapper"
    class:s-switch--dense={dense}
    class:s-switch--inset={inset}
    class:s-switch--checked={checked}>
    <input
      class="s-switch__input"
      type="checkbox"
      role="switch"
      aria-checked={checked}
      bind:checked
      {id}
      {value}
      on:change={updateGroup}
      use:events />
    <div class="s-switch__track" />
    <div class="s-switch__thumb" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style svelterial="../styles/Switch.scss"></style>
