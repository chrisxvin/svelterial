<script lang="ts">
  import Overlay from '@svelterialjs/core/Overlay.svelte';
  import Drawer from '@svelterialjs/navigation/Drawer.svelte';
  import Button from '@svelterialjs/core/Button.svelte';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import LeftDrawer from '$lib/components/LeftDrawer.svelte';
  import RightDrawer from '$lib/components/RightDrawer.svelte';
  import { mdiMenu } from '@mdi/js';
  import { onMount } from 'svelte';

  let smallScreen;
  let navigation = false;

  function check() {
    if (window.innerWidth < 1024) smallScreen = true;
    else smallScreen = false;
  }

  function toggle() {
    navigation = !navigation;
  }

  onMount(check);
</script>

<svelte:window on:resize={check} />

{#if smallScreen}
  <Button variant="fab" size="small" flat on:click={toggle}>
    <Icon path={mdiMenu} />
  </Button>
{/if}
<Drawer position="fixed" active={smallScreen ? navigation : true} class="top-56px">
  <div class="px-8px">
    <LeftDrawer />
  </div>
</Drawer>
{#if smallScreen && navigation}
  <Overlay on:click={toggle} />
{/if}
{#if !smallScreen}
  <Drawer position="fixed" edge="right" class="top-56px">
    <RightDrawer />
  </Drawer>
{/if}

<section class="lg:(px-256px)">
  <slot />
</section>
