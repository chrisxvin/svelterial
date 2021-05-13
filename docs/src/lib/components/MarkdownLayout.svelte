<script context="module">
  import Example from './Example.svelte';
  import Markup from './Markup.svelte';
  import h1 from './elements/h1.svelte';
  import h2 from './elements/h2.svelte';
  import blockquote from './elements/blockquote.svelte';

  export { Example, Markup, h1, h2, blockquote };
</script>

<script>
  import SEO from './SEO.svelte';

  export let title;
  export let description;
  export let keywords;
</script>

<SEO {title} {description} {keywords} />

<slot />

<style>
  :global(.md-heading) {
    font-weight: 500;
  }

  :global(.md-heading__link) {
    opacity: 0;
    transition: opacity 100ms ease-in;
  }

  :global(.md-heading:hover .md-heading__link) {
    opacity: 0.75;
  }

  :global(.md-heading__link > svg) {
    width: 0.75em;
    height: 0.75em;
    margin-left: 8px;
    margin-right: 8px;
    fill: currentColor;
  }

  :global(.md-link:hover) {
    text-decoration: underline;
  }
</style>
