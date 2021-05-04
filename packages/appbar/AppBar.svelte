<script>
  let klass = '';
  export { klass as class };

  export let tile = false;
  export let flat = false;
  export let dense = false;
  export let prominent = false;
  export let fixed = false;
  export let absolute = false;
  export let collapsed = false;
</script>

<header
  class="s-app-bar {klass}"
  class:tile
  class:flat
  class:dense
  class:prominent
  class:fixed
  class:absolute
  class:collapsed>
  <div class="s-app-bar__wrapper">
    <slot name="icon" />
    {#if !collapsed}
      <div class="s-app-bar__title">
        <slot name="title" />
      </div>
    {/if}
    <slot />
  </div>
  <slot name="extension" />
</header>

<style svelterial="./styles/AppBar.scss">
</style>
