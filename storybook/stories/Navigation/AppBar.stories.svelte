<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import { Button, Icon } from '@svelterialjs/core';
  import { AppBar } from '@svelterialjs/navigation';
  import { mdiMenu, mdiGithub, mdiStar, mdiRocket } from '@mdi/js';
</script>

<Meta
  parameters={{ layout: 'fullscreen' }}
  title="Components/Navigation/AppBar"
  component={AppBar}
  argTypes={metadata('navigation/AppBar', {
    slot_extension: {
      control: false,
    },
    slot_icon: {
      defaultValue: 'mdiMenu',
      options: ['mdiMenu', 'mdiGithub', 'mdiRocket'],
      mapping: { mdiMenu, mdiGithub, mdiRocket },
      control: {
        type: 'select',
      },
    },
  })}
  args={{ slot_title: 'Title', slot_default: '' }} />

<Story id="a" name="AppBar" let:args>
  <AppBar {...args}>
    <svelte:fragment slot="icon">
      <Button aria-label="Nav Hamburger" variant="fab" text>
        <Icon path={args.slot_icon} />
      </Button>
    </svelte:fragment>
    <h5 slot="title">
      {args.slot_title}
    </h5>
    {args.slot_default}
    <div style="flex-grow:1;" />
    <Button
      aria-label="Nav Link"
      variant="icon"
      text
      href="https://github.com/svelterialjs/svelterial"
      target="_blank">
      <Icon path={mdiStar} />
    </Button>
  </AppBar>
</Story>
