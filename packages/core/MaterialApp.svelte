<script>
  /**
   * The classes added to the wrapping element.
   */
  let klass = '';
  export { klass as class };

  /**
   * The theme of the Svelterial material app.
   */
  export let theme = 'light';
</script>

<main class="s-app theme--{theme} {klass}">
  <slot />
</main>

<style svelterial="./styles/MaterialApp.scss">
</style>
