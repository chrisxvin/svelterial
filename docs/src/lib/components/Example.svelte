<script context="module">
  //@ts-ignore
  const examples = import.meta.glob('../examples/*/*.svelte');
</script>

<script lang="ts">
  import Markup from './Markup.svelte';

  export let file: string;

  let component = examples[`../examples/${file}.svelte`]();
</script>

{#await component then c}
  <div class="rounded border">
    <div class="p-24px">
      <svelte:component this={c.default} />
    </div>
    <Markup lang="svelte">
      {@html c.source}
    </Markup>
  </div>
{/await}
