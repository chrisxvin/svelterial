<script>
  export let reverse = false;
  export let hcenter = false;
</script>

<div class="s-row" class:s-row--reverse={reverse} class:s-row--hcenter={hcenter}>
  <slot />
</div>

<style svelterial>
  .s-row {
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .s-row--reverse {
    flex-direction: row-reverse;
  }

  .s-row--hcenter {
    justify-content: center;
  }
</style>
