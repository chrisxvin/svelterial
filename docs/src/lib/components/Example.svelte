<script context="module">
  // @ts-ignore
  const examples = import.meta.glob('../examples/*/*.svelte');
</script>

<script lang="ts">
  import Markup from './Markup.svelte';
  import { slide } from 'svelte/transition';
  import { Button, Icon } from '@svelterialjs/core';
  import { mdiContentCopy, mdiCodeTags } from '@mdi/js';

  export let file: string;

  const component = examples[`../examples/${file}.svelte`]();

  let sourceVisible = false;
  function toggleSource() {
    sourceVisible = !sourceVisible;
  }
</script>

{#await component then c}
  <div class="rounded border">
    <div class="p-24px border-b">
      <svelte:component this={c.default} />
    </div>
    <div class="h-42px flex justify-end items-center space-x-1 px-2 bg-$s-body-elevated">
      <Button variant="icon" flat on:click={toggleSource}>
        <Icon size="20px" path={mdiCodeTags} />
      </Button>
      <Button variant="icon" flat>
        <Icon size="20px" path={mdiContentCopy} />
      </Button>
    </div>
  </div>
  {#if sourceVisible}
    <div transition:slide>
      <Markup lang="svelte">
        {@html c.source}
      </Markup>
    </div>
  {/if}
{/await}
