<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button, Icon, Overlay } from '@svelterialjs/core';
  import { Popover } from '@svelterialjs/tooltip';
  import { mdiMenu, mdiAccount } from '@mdi/js';

  const popovers = [];
  let active = 0;
  function next() {
    if (active > 0) popovers[active - 1].hide();
    if (active < popovers.length) {
      popovers[active].show();
      active += 1;
    }
  }
</script>

<Meta title="Recipies/Walkthrough" parameters={{ layout: 'fullscreen' }} />

<Story name="Basic">
  <div class="spaced">
    <Popover bind:this={popovers[0]}>
      <Button slot="target" variant="fab">
        <Icon path={mdiMenu} />
      </Button>
      This is the Menu button.
    </Popover>

    <Popover bind:this={popovers[1]}>
      <Button slot="target">Stuff</Button>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga odio aperiam quaerat
      distinctio mollitia, consectetur, architecto harum voluptas aut, voluptatem et cumque?
      Pariatur, tempore.
    </Popover>

    <Popover bind:this={popovers[2]}>
      <h5 slot="target">Cats</h5>
      Cats are better than dogs.
    </Popover>
  </div>
  <Popover placement="left-start" bind:this={popovers[3]}>
    <div slot="target" class="fixed">
      <Button variant="fab" class="s-primary">
        <Icon path={mdiAccount} />
      </Button>
    </div>
    Click on this button to find more about your account.
  </Popover>
  <Overlay --overlay-index="1" on:click={next} />
</Story>

<style>
  .spaced {
    height: 100vh;
    width: 90vw;
    margin-inline: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .fixed {
    position: fixed;
    bottom: 28px;
    right: 28px;
  }
</style>
