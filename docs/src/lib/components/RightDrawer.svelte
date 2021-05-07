<script>
  function render(e) {
    console.log(e);
  }
</script>

<svelte:window on:sveltekit:navigation-end={render} />
