<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Window, WindowItem } from '@svelterialjs/tabs';
  import { Button } from '@svelterialjs/core';

  let window1;
</script>

<Meta
  title="Components/Tabs/Window"
  component={Window}
  argTypes={metadata('tabs/Window')}
  parameters={{ layout: 'padded' }} />

<Story id="a" name="Window">
  <Window bind:this={window1}>
    <WindowItem>
      <div class="purple">Item 1</div>
    </WindowItem>
    <WindowItem>
      <div class="green">Item 2</div>
    </WindowItem>
    <WindowItem>
      <div class="blue">Item 3</div>
    </WindowItem>
  </Window>

  <section>
    <Button on:click={window1.prev}>Previous</Button>
    <Button on:click={window1.next}>Next</Button>
  </section>
</Story>

<style>
  div {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 500;
  }

  section {
    display: flex;
    justify-content: center;
    margin-top: 8px;
    gap: 4px;
  }

  .purple {
    background-color: #9b59b6;
  }

  .green {
    background-color: #27ae60;
  }

  .blue {
    background-color: #2980b9;
  }
</style>
