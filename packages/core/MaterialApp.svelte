<script>
  /**
   * The theme of the Svelterial material app.
   */
  export let theme = 'light';
</script>

<main class="s-app theme--{theme}">
  <slot />
</main>

<style svelterial="./styles/MaterialApp.scss">
</style>
