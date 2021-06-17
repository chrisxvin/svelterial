<script>
  let klass = '';
  export { klass as class };
  export let large = false;
  export let items = [];

  const defaults = {
    disabled: false,
    href: '',
    text: '',
    class: '',
  };

  $: _items = items.map((x) => ({ ...defaults, ...x }));
</script>

<ul class="s-breadcrumbs {klass}" class:s-breadcrumbs--large={large}>
  {#each _items as item, i}
    {#if i !== 0}
      <li class="s-breadcrumbs__divider">
        <slot name="divider">/</slot>
      </li>
    {/if}
    <li class="s-breadcrumbs__item">
      {#if item.href}
        <a
          href={item.href}
          class="s-breadcrumbs__content {item.class}"
          class:is-disabled={item.disabled}>
          {item.text}
        </a>
      {:else}
        <span
          class="s-breadcrumbs__content {item.class}"
          class:is-disabled={item.disabled}>
          {item.text}
        </span>
      {/if}
    </li>
  {/each}
</ul>

<style svelterial="../styles/Breadcrumbs.scss">
</style>
