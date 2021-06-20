<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Popover } from '@svelterialjs/tooltip';
  import { Button, Divider } from '@svelterialjs/core';
</script>

<Meta
  title="Components/Tooltip/Popover"
  component={Popover}
  argTypes={metadata('tooltip/Popover', {
    slot_default: {
      control: false,
    },
  })} />

<Story name="Basic" let:args>
  <Popover {...args}>
    <Button slot="target">Hello</Button>
    <h6>Popover</h6>
    <Divider />
    A Popover provides more information than a Tooltip.
  </Popover>
</Story>

<Story name="Overflow" let:args>
  <div class="overflow">
    <Popover {...args}>
      <div slot="target" class="reference">Reference</div>
      Shrek is an anti-social and highly-territorial green ogre who loves the solitude of his
      swamp.
    </Popover>
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
