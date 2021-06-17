<script>
  let klass = '';
  export { klass as class };
  export let rounded = false;
  export let notification = false;
  export let dot = false;
</script>

<span
  class="s-badge {klass}"
  class:s-badge--rounded={rounded}
  class:s-badge--notification={notification}
  class:s-badge--dot={dot}>
  <slot />
</span>

<style svelterial="../styles/Badge.scss">
</style>
