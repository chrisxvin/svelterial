<script lang="ts">
  import Overlay from '@svelterialjs/core/Overlay.svelte';
  import Drawer from '@svelterialjs/navigation/Drawer.svelte';
  import Button from '@svelterialjs/core/Button.svelte';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiMenu } from '@mdi/js';
  import { onMount } from 'svelte';

  import List from '@svelterialjs/list/List.svelte';
  import ListItem from '@svelterialjs/list/ListItem.svelte';

  import { components } from '$lib/links';

  let smallScreen;
  let navigation = false;
  let TOCList = [];
  let TOCActiveItemText = '';
  let mdContainer: HTMLElement;
  let observer: IntersectionObserver;

  function check() {
    if (window.innerWidth < 1024) smallScreen = true;
    else smallScreen = false;
  }

  function toggle() {
    navigation = !navigation;
  }

  function formatLink(link: string) {
    return link.toLowerCase();
  }

  function renderTOC() {
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              TOCActiveItemText = entry.target.textContent;
            }
          });
        },
        {
          rootMargin: '-35% 0px',
        },
      );
    }
    observer.disconnect();

    const headings = mdContainer.querySelectorAll('.md-heading:not(h1)');
    TOCList = Array.from(headings).map((heading) => ({
      text: heading.textContent,
      href: '#' + heading.id,
      level: Number(heading.nodeName.slice(1)) - 1,
    }));

    headings.forEach((heading) => {
      observer.observe(heading);
    });
  }

  onMount(check);
</script>

<svelte:window
  on:resize={check}
  on:sveltekit:start={renderTOC}
  on:sveltekit:navigation-end={renderTOC} />

{#if smallScreen}
  <Button variant="fab" size="small" flat on:click={toggle}>
    <Icon path={mdiMenu} />
  </Button>
{/if}
<Drawer
  position="fixed"
  active={smallScreen ? navigation : true}
  class="top-56px px-12px">
  {#each components as c}
    <List>
      <svelte:fragment slot="title">{c.package}</svelte:fragment>
      {#each c.components as name}
        <a href="/docs/components/{formatLink(name)}">
          <ListItem selectable dense nav>
            {name}
          </ListItem>
        </a>
      {/each}
    </List>
  {/each}
</Drawer>
{#if smallScreen && navigation}
  <Overlay on:click={toggle} />
{/if}
{#if !smallScreen}
  <Drawer position="fixed" edge="right" class="top-56px px-12px">
    <h6 class="my-16px">Contents</h6>
    <div id="toc">
      {#each TOCList as item}
        <a
          class="toc__link"
          class:toc__link--active={item.text === TOCActiveItemText}
          href={item.href}
          style="--toc-level:{item.level};">
          {item.text}
        </a>
      {/each}
    </div>
  </Drawer>
{/if}

<section bind:this={mdContainer} class="lg:(px-256px)">
  <slot />
</section>

<style>
  .toc__link {
    color: var(--s-text-secondary);
    font-size: 0.875rem;
    border-left: 2px solid var(--s-disabled);
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: calc(var(--toc-level) * 12px);
    display: block;
  }

  .toc__link--active {
    color: #1976d2;
    border-left-color: currentColor;
  }
</style>
