<script lang="ts">
  import 'virtual:windi.css';
  import MaterialApp from '@svelterialjs/core/MaterialApp.svelte';
  import AppBar from '@svelterialjs/navigation/AppBar.svelte';
  import Button from '@svelterialjs/core/Button.svelte';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiGithub } from '@mdi/js';
  import links from '$lib/links';
  import { theme } from '$lib/stores';
</script>

<svelte:head>
  {#if $theme === 'light'}
    <link href="/prism-light.css" rel="stylesheet" />
  {:else}
    <link href="/prism-dark.css" rel="stylesheet" />
  {/if}
</svelte:head>

<MaterialApp theme={$theme}>
  <AppBar position="fixed" class="inset-x-0">
    <h5 slot="title" class="ml-8px">Svelterial</h5>
    <div class="flex-grow" />
    <Button variant="fab" size="small" flat href={links.github} target="_blank">
      <Icon path={mdiGithub} />
    </Button>
  </AppBar>
  <main class="pt-56px">
    <slot />
  </main>
</MaterialApp>
