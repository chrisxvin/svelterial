---
title: Material App
description: The material app component is a wrapper which provides all components inside it with theming.
keywords: material app, svelterial material component, svelte material component
---

# Material App

> This component is the base for Svelterial and helps you to bootstrap your app. All other svelterial components are required to be inside of this component in order for them to properly inherit styles and themes. _MaterialApp_ should ideally only be used once inside your app.

## Usage

The default theme is the light theme, this is how ideally your base layout should look. It is also recommended that you store the theme variable in a store and can access it in any component you want and also if you want your user selected theme to be saved, use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

```html
<script>
  import MaterialApp from '@svelterialjs/core/MaterialApp.svelte';
  let theme = 'light';

  function toggleTheme() {
    if (theme === 'light') theme = 'dark';
    else theme = 'light';
  }
</script>

<MaterialApp {theme}>
  <button on:click="{toggleTheme}">Toggle Theme</button>
  ...
</MaterialApp>
```

## Manually set themes

Suppose if you want your `div` to be dark themed no matter what the theme of the app is then add the class `theme--dark` to the `div` or `theme--light` if you want it to be light themed.

```html
<MaterialApp {theme}>
  <!-- this div will have dark theme no matter the value of {theme} -->
  <div class="theme--dark">...</div>
</MaterialApp>
```
