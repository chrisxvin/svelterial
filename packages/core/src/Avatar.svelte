<script>
  /**
   * @style {48px} --avatar-size The size of the avatar.
   */

  /**
   * The classes to add to the avatar.
   */
  let klass = '';
  export { klass as class };

  /**
   * If `true`, then avatar will be rounded.
   */
  export let rounded = false;

  /**
   * If `true`, then avatar will have no border radius.
   */
  export let tile = false;
</script>

<div
  class="s-avatar {klass}"
  class:s-avatar--rounded={rounded}
  class:s-avatar--tile={tile}>
  <slot />
</div>

<style svelterial="../styles/Avatar.scss">
</style>
