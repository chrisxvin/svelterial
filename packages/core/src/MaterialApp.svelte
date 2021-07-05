<script>
  import { setContext } from 'svelte';

  /**
   * The classes added to the wrapping element.
   */
  let klass = '';
  export { klass as class };

  /**
   * The theme of the Svelterial material app.
   */
  export let theme = 'light';

  setContext('SVELTERIAL_ICONS', {
    close: '',
    arrow: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  });
</script>

<main class="s-app theme--{theme} {klass}">
  <slot />
</main>

<style svelterial="../styles/MaterialApp.scss">
</style>
