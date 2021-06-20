<script>
  export let active = false;
</script>

<div class="s-pill" on:click class:s-pill--active={active}>
  <slot />
</div>

<style svelterial="../styles/Pill.scss"></style>
