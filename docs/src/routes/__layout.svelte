<script lang="ts">
  import 'virtual:windi.css';
  import MaterialApp from '@svelterialjs/core/MaterialApp.svelte';
  import AppBar from '@svelterialjs/navigation/AppBar.svelte';
  import Button from '@svelterialjs/core/Button.svelte';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiGithub, mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';
  import links from '$lib/links';
  import { theme } from '$lib/stores';

  function toggleTheme() {
    $theme = $theme === 'light' ? 'dark' : 'light';
  }
</script>

<MaterialApp theme={$theme} class="pt-56px">
  <AppBar position="fixed" class="inset-x-0">
    <h5 slot="title" class="ml-8px">Svelterial</h5>
    <div class="flex-grow" />
    <Button text href="/docs">Docs</Button>
    <Button variant="fab" size="small" text href={links.github} target="_blank">
      <Icon path={mdiGithub} />
    </Button>
    <Button variant="fab" size="small" text on:click={toggleTheme}>
      <Icon path={$theme === 'light' ? mdiWeatherNight : mdiWeatherSunny} />
    </Button>
  </AppBar>
  <slot />
</MaterialApp>
