<script>
  import { uid } from 'uid';
  import Ripple from '@svelterialjs/core/utils/Ripple.js';

  let klass = '';
  export { klass as class };
  export let value = undefined;
  export let group = null;
  export let id = `s-radio-${uid(4)}`;
</script>

<div class="s-radio {klass}">
  <div class="s-radio__wrapper" use:Ripple={{ centered: true }}>
    <input
      class="s-radio__input"
      type="radio"
      role="radio"
      aria-checked={value === group}
      bind:group
      {id}
      {value} />
    <div class="s-radio__circle" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style svelterial="../styles/Radio.scss"></style>
