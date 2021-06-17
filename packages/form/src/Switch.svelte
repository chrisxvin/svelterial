<script>
  /**
   * @style {var(--s-primary-base)} --switch-color The color for a checked switch.
   */

  import { uid } from 'uid';

  // Add class to switch wrapper.
  let klass = '';
  export { klass as class };

  /**
   * The value for the switch
   * @type {null | string | number}
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
   * If `true`, the switch becomes disabled.
   */
  export let disabled = false;

  /**
   * ID for the input element for the switch.
   * @type {string}
   */
  export let id = `s-switch-${uid(4)}`;

  const hasValidGroup = Array.isArray(group);
  if (hasValidGroup && value) {
    if (group.indexOf(value) >= 0) checked = true;
  }

  function groupUpdate() {
    if (hasValidGroup && value) {
      const i = group.indexOf(value);
      if (i < 0) {
        group.push(value);
      } else {
        group.splice(i, 1);
      }
      group = group;
    }
  }
</script>

<div class="s-switch {klass}">
  <div
    class="s-switch__wrapper"
    class:s-switch--dense={dense}
    class:s-switch--inset={inset}
    class:s-switch--disabled={disabled}
    class:s-switch--checked={checked}>
    <input
      type="checkbox"
      role="switch"
      aria-checked={checked}
      bind:checked
      {id}
      {disabled}
      {value}
      on:change={groupUpdate}
      on:change />
    <div class="s-switch__track" />
    <div class="s-switch__thumb" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style svelterial="../styles/Switch.scss"></style>
