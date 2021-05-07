<script context="module">
  import Example from './Example.svelte';
  import Markup from './Markup.svelte';

  export { Example, Markup };
</script>

<script>
  export let title;
  export let description;
  export let keywords;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
</svelte:head>

<div id="markdown-container">
  <slot />
</div>
