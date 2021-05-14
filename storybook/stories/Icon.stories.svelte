<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import args from '../metadata';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiHome, mdiGithub, mdiHuman, mdiFire } from '@mdi/js';
</script>

<Meta
  title="Components/Core/Icon"
  component={Icon}
  argTypes={args('core/Icon', {
    path: {
      defaultValue: 'mdiHome',
      options: ['mdiHome', 'mdiGithub', 'mdiHuman', 'mdiFire'],
      mapping: { mdiHome, mdiGithub, mdiHuman, mdiFire },
      control: {
        type: 'select',
      },
    },
    slot_default: {
      table: {
        disable: true,
      },
    },
  })} />

<Template let:args>
  <Icon {...args} />
</Template>

<Story name="SVG" />
