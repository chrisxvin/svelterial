<script lang="ts">
  import List from '@svelterialjs/list/List.svelte';
  import ListItem from '@svelterialjs/list/ListItem.svelte';

  import { components } from '../links';

  function format(link: string) {
    return link.toLowerCase();
  }
</script>

<List>
  <svelte:fragment slot="title">Components</svelte:fragment>
  {#each components as i}
    <a href="/components/{format(i)}">
      <ListItem selectable dense nav>
        {i}
      </ListItem>
    </a>
  {/each}
</List>
