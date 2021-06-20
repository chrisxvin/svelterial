<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Pill } from '@svelterialjs/navigation';

  let value = 1;
  function select(v) {
    value = v;
  }
</script>

<Meta title="Components/Navigation/Pill" component={Pill} />

<Story name="Basic">
  <Pill>Hello</Pill>
</Story>

<Story name="Group">
  <div>
    <Pill on:click={select(1)} active={value === 1}>Item 1</Pill>
    <Pill on:click={select(2)} active={value === 2}>Item 2</Pill>
    <Pill on:click={select(3)} active={value === 3}>Item 3</Pill>
  </div>
</Story>

<style>
  div {
    display: flex;
  }
</style>
