<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button, Icon, Overlay } from '@svelterialjs/core';
  import Screen from '@svelterialjs/core/utils/Screen.svelte';
  import { AppBar, Drawer } from '@svelterialjs/navigation';
  import { ListItem } from '@svelterialjs/list';
  import { mdiMenu, mdiHome, mdiAccount, mdiCat, mdiAlert, mdiGold } from '@mdi/js';
  let active = false;
  const items = Array.from(Array(20).keys());
  const icons = [mdiHome, mdiAccount, mdiCat, mdiAlert, mdiGold];

  let temp1 = true;
  let size;
</script>

<Meta title="Recipies/Layout" parameters={{ layout: 'fullscreen' }} />

<Story name="Basic 1">
  <AppBar>
    <Button
      slot="icon"
      text
      variant="fab"
      aria-label="Menu"
      on:click={() => (active = !active)}>
      <Icon path={mdiMenu} />
    </Button>
    <h5 slot="title">Title</h5>
  </AppBar>
  <div style="display:flex;">
    <Drawer height="calc(100vh - 58px)" {active}>
      {#each items as i}
        <ListItem selectable>Item {i + 1}</ListItem>
      {/each}
    </Drawer>
    <div class="container">
      <h4>Content Here</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro
        recusandae sequi sunt est tempora dicta facere, atque officiis deleniti reiciendis
        voluptate quos commodi doloremque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab
        voluptatibus sunt neque earum explicabo, ad quod odio totam. Nostrum accusantium
        cum tempora odio esse a iusto molestiae, unde error suscipit animi maxime dolorem
        porro?
      </p>
    </div>
  </div>
</Story>

<Story name="Basic 2">
  <AppBar position="absolute" --appbar-inset="0 0 auto {active ? '256px' : 0}">
    <Button
      slot="icon"
      text
      variant="fab"
      aria-label="Menu"
      on:click={() => (active = !active)}>
      <Icon path={mdiMenu} />
    </Button>
    <h5 slot="title">Title</h5>
  </AppBar>
  <div style="display:flex;">
    <Drawer {active}>
      {#each items as i}
        <ListItem nav selectable>Item {i + 1}</ListItem>
      {/each}
    </Drawer>
    <div class="container">
      <br /><br />
      <h4>Content Here</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro
        recusandae sequi sunt est tempora dicta facere, atque officiis deleniti reiciendis
        voluptate quos commodi doloremque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab
        voluptatibus sunt neque earum explicabo, ad quod odio totam. Nostrum accusantium
        cum tempora odio esse a iusto molestiae, unde error suscipit animi maxime dolorem
        porro?
      </p>
    </div>
  </div>
</Story>

<Story name="Basic 3">
  <AppBar>
    <Button
      slot="icon"
      text
      variant="fab"
      aria-label="Menu"
      on:click={() => (active = !active)}>
      <Icon path={mdiMenu} />
    </Button>
    <h5 slot="title">Title</h5>
  </AppBar>
  <Drawer position="fixed" {active}>
    {#each items as i}
      <ListItem selectable>Item {i + 1}</ListItem>
    {/each}
  </Drawer>
  {#if active}
    <Overlay on:click={() => (active = !active)} />
  {/if}
  <div class="container">
    <h4>Content Here</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro recusandae
      sequi sunt est tempora dicta facere, atque officiis deleniti reiciendis voluptate
      quos commodi doloremque!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab voluptatibus
      sunt neque earum explicabo, ad quod odio totam. Nostrum accusantium cum tempora odio
      esse a iusto molestiae, unde error suscipit animi maxime dolorem porro?
    </p>
  </div>
</Story>

<Story name="Responsive">
  <Screen
    on:change={(e) => {
      size = e.detail.name;
    }} />
  <AppBar>
    <svelte:fragment slot="icon">
      {#if ['xs', 'sm'].includes(size)}
        <Button text variant="fab" aria-label="Menu" on:click={() => (active = !active)}>
          <Icon path={mdiMenu} />
        </Button>
      {/if}
    </svelte:fragment>

    <h5 slot="title">Title</h5>
  </AppBar>
  {#if active && ['xs', 'sm'].includes(size)}
    <Overlay on:click={() => (active = !active)} />
  {/if}
  <div style="display:flex;">
    <Drawer
      position={['xs', 'sm'].includes(size) ? 'fixed' : 'relative'}
      active={active || !['xs', 'sm'].includes(size)}>
      {#each items as i}
        <ListItem selectable>Item {i + 1}</ListItem>
      {/each}
    </Drawer>

    <div class="container">
      <h4>Content Here</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro
        recusandae sequi sunt est tempora dicta facere, atque officiis deleniti reiciendis
        voluptate quos commodi doloremque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab
        voluptatibus sunt neque earum explicabo, ad quod odio totam. Nostrum accusantium
        cum tempora odio esse a iusto molestiae, unde error suscipit animi maxime dolorem
        porro?
      </p>
    </div>
  </div>
</Story>

<Story name="NavigationRail">
  <div style="display:flex;">
    <Drawer mini={temp1} border="right">
      {#each Array(5) as _, i}
        <ListItem selectable>
          <Icon slot="prepend" path={icons[i]} />
          Item {i + 1}
        </ListItem>
      {/each}
    </Drawer>
    <div class="container">
      <Button on:click={() => (temp1 = !temp1)}>Toggle</Button>
      <br /><br />
      <h4>Content Here</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro
        recusandae sequi sunt est tempora dicta facere, atque officiis deleniti reiciendis
        voluptate quos commodi doloremque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab
        voluptatibus sunt neque earum explicabo, ad quod odio totam. Nostrum accusantium
        cum tempora odio esse a iusto molestiae, unde error suscipit animi maxime dolorem
        porro?
      </p>
    </div>
  </div>
</Story>

<style>
  .container {
    padding: 1.5rem;
  }
</style>
