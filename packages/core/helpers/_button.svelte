<script>
  import ActionForward from '../utils/ForwardActions';
  let klass;
  export { klass as class };
  export let use;
</script>

<button class={klass} {...$$restProps} use:ActionForward={use}>
  <slot />
</button>
