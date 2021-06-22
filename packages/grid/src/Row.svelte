<script>
  let klass = '';
  export { klass as class };
  export let reverse = false;
  export let hcenter = false;
  export let vcenter = false;
</script>

<div
  class="s-row {klass}"
  class:s-row--reverse={reverse}
  class:s-row--hcenter={hcenter}
  class:s-row--vcenter={vcenter}>
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

  .s-row--vcenter {
    align-items: center;
  }
</style>
