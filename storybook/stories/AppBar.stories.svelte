<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import args from '../metadata';
  import AppBar from '@svelterialjs/navigation/AppBar.svelte';
  import Button from '@svelterialjs/core/Button.svelte';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiMenu, mdiGithub, mdiStar, mdiRocket } from '@mdi/js';
</script>

<Meta
  parameters={{ layout: 'fullscreen' }}
  title="Components/Navigation/AppBar"
  component={AppBar}
  argTypes={args('navigation/AppBar', {
    slot_title: {
      defaultValue: 'Title',
    },
    slot_extension: {
      table: {
        disable: true,
      },
    },
    slot_icon: {
      defaultValue: 'mdiMenu',
      options: ['mdiMenu', 'mdiGithub', 'mdiRocket'],
      mapping: { mdiMenu, mdiGithub, mdiRocket },
      control: {
        type: 'select',
      },
    },
    slot_default: {
      defaultValue: '',
    },
  })} />

<Template let:args>
  <AppBar {...args}>
    <svelte:fragment slot="icon">
      <Button variant="fab" text>
        <Icon path={args.slot_icon} />
      </Button>
    </svelte:fragment>
    <h5 slot="title">
      {args.slot_title}
    </h5>
    {args.slot_default}
    <div style="flex-grow:1;" />
    <Button
      variant="icon"
      text
      href="https://github.com/svelterialjs/svelterial"
      target="_blank">
      <Icon path={mdiStar} />
    </Button>
  </AppBar>
</Template>

<Story name="Basic" />
