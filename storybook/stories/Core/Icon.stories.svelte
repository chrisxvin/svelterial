<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import metadata from '../metadata';
  import Icon from '@svelterialjs/core/src/Icon.svelte';
  import { mdiHome, mdiGithub, mdiHuman, mdiFire } from '@mdi/js';
</script>

<Meta
  title="Components/Core/Icon"
  component={Icon}
  argTypes={metadata('core/Icon', {
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

<Story id="default" name="Icon" let:args>
  <Icon {...args} />
</Story>
