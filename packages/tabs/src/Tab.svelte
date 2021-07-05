<script>
  import SlideItem from '@svelterialjs/slide-group/src/SlideItem.svelte';

  let klass = '';
  export { klass as class };
</script>

<SlideItem let:active>
  <button class="s-tab {klass}" class:s-tab--active={active}>
    <slot />
  </button>
</SlideItem>

<style svelterial="../styles/Tab.scss"></style>
