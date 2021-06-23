<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Tooltip } from '@svelterialjs/tooltip';
  import { Button } from '@svelterialjs/core';
</script>

<Meta
  title="Components/Tooltip/Tooltip"
  component={Tooltip}
  argTypes={metadata('tooltip/Tooltip')}
  args={{ tip: 'Hello World' }} />

<Story name="Basic" let:args>
  <Tooltip {...args}>
    <Button>Hello</Button>
  </Tooltip>
</Story>

<Story name="Delayed" let:args>
  <Tooltip {...args} --tooltip-delay="1s">
    <Button>Hello</Button>
  </Tooltip>
</Story>

<Story name="Overflow" let:args>
  <div class="overflow">
    <Tooltip {...args}>
      <div class="reference">Reference</div>
    </Tooltip>
  </div>
</Story>

<style>
  .reference {
    background-color: var(--s-primary-base);
    border-radius: 0.5rem;
    color: #fff;
    font-weight: 500;
    padding: 1rem 2rem;
  }

  .overflow {
    width: 200vw;
    height: 200vh;
    display: grid;
    place-content: center;
  }
</style>
