<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { SlideGroup, SlideItem } from '@svelterialjs/slide-group';
  import metadata from '../metadata';
</script>

<Meta
  title="Components/SlideGroup"
  argTypes={metadata('slide-group/SlideGroup')}
  parameters={{ layout: 'padded' }} />

<Story name="Few Items" let:args>
  <SlideGroup {...args}>
    {#each Array(3) as _, i}
      <SlideItem let:active>
        <div class:s-primary={active}>Item {i + 1}</div>
      </SlideItem>
    {/each}
  </SlideGroup>
</Story>
<Story name="Many Items" let:args>
  <SlideGroup {...args}>
    {#each Array(15) as _, i}
      <SlideItem let:active>
        <div class:s-primary={active}>Item {i + 1}</div>
      </SlideItem>
    {/each}
  </SlideGroup>
</Story>

<style>
  div {
    width: 150px;
    height: 200px;
    margin: 0 10px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--s-body-elevated);
  }
</style>
