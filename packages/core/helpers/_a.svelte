<script>
  import ActionForward from '../utils/ForwardActions';
  let klass;
  export { klass as class };
  export let href;
  export let use;
</script>

<a class={klass} {href} {...$$restProps} use:ActionForward={use}>
  <slot />
</a>
