<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { FluidGrid } from '@svelterialjs/grid';
  import metadata from '../metadata';
</script>

<Meta
  title="Components/Grid/FluidGrid"
  component={FluidGrid}
  parameters={{ layout: 'fullscreen' }}
  argTypes={metadata('grid/FluidGrid')} />

<Story name="Basic" let:args>
  <FluidGrid {...args}>
    {#each Array(15) as _, i}
      <div class="card" style="--i: {i + 1}">
        Item {i + 1}
      </div>
    {/each}
  </FluidGrid>
</Story>

<Story name="Random" let:args>
  <FluidGrid {...args}>
    {#each Array(20) as _, i}
      <div
        class="card"
        style="--rowspan:{i % 4 ? 1 : 2};--colspan:{i % 5 ? 1 : 2};--i: {i + 1};">
        Item {i + 1}
      </div>
    {/each}
  </FluidGrid>
</Story>

<style>
  .card {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    background-color: hsl(calc(15 * var(--i)), 95%, 85%);
  }
</style>
