<script>
  /**
   * @styles {var(--s-primary-base)} --bg The background color of the progress bar.
   * @styles {4px} --height The height of the progress bar.
   * @styles {var(--bg)} --color The color of the bars of the progress bar.
   */

  /**
   * The classes to add to the progress bar.
   */
  let klass = '';
  export { klass as class };

  /**
   * The value of the progress var (must be from 0 to 100).
   */
  export let value = 0;

  /**
   * If `true`, then the progress bar is an indeterminate one.
   */
  export let indeterminate = false;

  /**
   * The background opacity of the progress bar.
   */
  export let bgOpacity = 0.3;

  /**
   * The buffer width.
   */
  export let buffer = 100;

  /**
   * If `true`, then the progress bar is reversed.
   */
  export let reversed = false;

  export let stream = false;
  export let rounded = false;
  export let striped = false;

  $: bgOffset = `${reversed ? 'right' : 'left'}:${value}%;width:${buffer - value}%;`;
</script>

<div
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={value}
  class="s-progress-linear {klass}"
  class:s-progress-linear--reversed={reversed}
  class:s-progress-linear--rounded={rounded}>
  <div class="s-progress-linear__background" style="opacity:{bgOpacity};{bgOffset}" />

  {#if indeterminate}
    <div style="background:var(--color, var(--bg, var(--s-primary-base)));">
      <div class="s-progress-linear__bar is-indeterminate is-long" />
      <div class="s-progress-linear__bar is-indeterminate is-short" />
    </div>
  {:else}
    <div
      class="s-progress-linear__bar is-determinate"
      class:is-striped={striped}
      style="width:{value}%;" />
  {/if}

  <div class="s-progress-linear__content">
    <slot />
  </div>

  {#if stream}
    <div class="s-progress-linear__stream" style="width:{100 - buffer}%;" />
  {/if}
</div>

<style svelterial="./styles/Linear.scss">
</style>
