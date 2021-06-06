<script>
  let klass = '';
  export { klass as class };
  export let fluid = false;
  export let mini = false;
  export let position = 'absolute';
  export let edge = 'left';
  export let border = false;
  export let active = true;
</script>

<div
  class="s-drawer s-drawer--{position} s-drawer--{edge} {klass}"
  class:s-drawer--fluid={fluid}
  class:s-drawer--mini={mini}
  class:s-drawer--border={border}
  class:s-drawer--active={active}>
  <slot />
</div>

<style svelterial="../styles/Drawer.scss"></style>
