<script>
  /**
   * @styles {48px} --size The size of the avatar.
   */
  let klass = '';
  export { klass as class };

  export let rounded = false;
  export let tile = false;
</script>

<div
  class="s-avatar {klass}"
  class:s-avatar--rounded={rounded}
  class:s-avatar--tile={tile}>
  <slot />
</div>

<style svelterial="./styles/Avatar.scss">
</style>
