<script lang="ts">
  export let title: string;
  export let description: string;
  export let keywords: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
</svelte:head>
