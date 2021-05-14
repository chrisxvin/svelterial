<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Introduction"
  parameters={{
    options: { showPanel: false },
    layout: 'padded',
    controls: { hideNoControlsWarning: true },
  }} />

<Story name="Introduction">
  <div class="container">
    <h1>Svelterial Storybook</h1>
    <p class="subtitle">
      This is the official StoryBook for Svelterial. You can experiment with every
      component Svelterial provides in here.
    </p>
    <p>Here are a few things to remember:</p>
    <ul>
      <li>
        Press <kbd>A</kbd> to toggle controls and settings.
      </li>
    </ul>
  </div>
</Story>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  .container {
    font-family: 'Inter', 'Roboto', sans-serif;
  }
  h1 {
    font-weight: 600;
    margin: 0;
    font-size: 4rem;
  }
  .subtitle {
    font-size: 1.25rem;
  }
</style>
