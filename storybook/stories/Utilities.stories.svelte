<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Ripple from '@svelterialjs/core/utils/Ripple';
  import Screen from '@svelterialjs/core/utils/Screen.svelte';
  import { createSelect, isActive } from '@svelterialjs/core/utils/Group';
  import { writable } from 'svelte/store';

  let screen = {};
  const group = writable(0);
  group.select = createSelect(group.update);
</script>

<Meta
  title="Utilities"
  parameters={{
    options: { showPanel: false },
    layout: 'padded',
    controls: { hideNoControlsWarning: true },
  }} />

<Story name="Colors">
  <h5>Background Colors</h5>
  <br />
  <div class="grid">
    <div class="card s-primary">.s-primary</div>
    <div class="card s-secondary">.s-secondary</div>
  </div>
  <br /><br />
  <h5>Text Colors</h5>
  <br />
  <div class="grid">
    <div class="card s-primary-text">.s-primary-text</div>
    <div class="card s-secondary-text">.s-secondary-text</div>
  </div>
</Story>

<Story name="Typography">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  <p>
    This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
    eligendi rerum at fugit aperiam suscipit nostrum, accusamus quas ullam doloribus et
    sequi saepe, quidem obcaecati perferendis deserunt aspernatur? Quo beatae, nihil
    possimus nulla vel odio reprehenderit distinctio, minima aspernatur obcaecati in sunt
    voluptates ducimus! Ratione nihil eum culpa et odio?
  </p>
</Story>

<Story
  name="Ripple | Waves"
  args={{
    class: '',
    color: 'currentColor',
    opacity: 0.1,
    centered: false,
    spreadingDuration: '.4s',
    spreadingDelay: '0s',
    spreadingTimingFunction: 'linear',
    clearingDuration: '1s',
    clearingDelay: '0s',
    clearingTimingFunction: 'ease-in-out',
  }}
  let:args>
  <div class="card cursor" use:Ripple={args}>Click Me!</div>
</Story>

<Story parameters={{ layout: 'centered' }} name="Screen | Breakpoints">
  <Screen on:change={(e) => (screen = e.detail)} />
  <h5>name: {screen.name}</h5>
  <h5>bodySize: {screen.bodySize}px</h5>
</Story>

<Story name="Group" args={{ multiple: false, mandatory: false, max: Infinity }} let:args>
  <div class="grid">
    <div
      class="card"
      on:click={group.select(1, args)}
      class:s-primary={isActive($group, 1)}>
      Select 1
    </div>
    <div
      class="card"
      on:click={group.select(2, args)}
      class:s-primary={isActive($group, 2)}>
      Select 2
    </div>
    <div
      class="card"
      on:click={group.select(3, args)}
      class:s-primary={isActive($group, 3)}>
      Select 3
    </div>
  </div>
</Story>

<style>
  .card {
    padding: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    font-size: 1.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .cursor {
    cursor: pointer;
  }
</style>
