<script>
  /**
   * @style {var(--s-primary-base)} --progress-color The color of the progress bar.
   */

  /**
   * The classes to add to the circular progress.
   */
  let klass = '';
  export { klass as class };

  /**
   * If `true`, then the progress will be indeterminate.
   */
  export let indeterminate = false;

  /**
   * The number of degrees to rotate the progress bar.
   */
  export let rotate = 0;

  /**
   * The size of the progress bar.
   */
  export let size = 32;

  /**
   * The value representing the progress.
   */
  export let value = 0;

  /**
   * The width of the circle.
   */
  export let width = 4;

  const radius = 20;
  const circumference = 2 * 3.1416 * radius;
  const viewBoxSize = radius / (1 - Number(width) / +size);
  const strokeWidth = (Number(width) / +size) * viewBoxSize * 2;
  const strokeDashOffset = ((100 - value) / 100) * circumference;
  const circleProps = {
    fill: 'transparent',
    cx: 2 * viewBoxSize,
    cy: 2 * viewBoxSize,
    r: radius,
    'stroke-width': strokeWidth,
    'stroke-dasharray': circumference,
  };
</script>

<div
  role="progressbar"
  aria-label="ProgressBar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={value}
  class="s-progress-circular {klass}"
  class:s-progress-circular--indeterminate={indeterminate}
  style="width:{size}px;height:{size}px;">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="{viewBoxSize} {viewBoxSize} {2 * viewBoxSize} {2 * viewBoxSize}"
    style="transform: rotate({rotate}deg)">
    {#if !indeterminate}
      <circle
        class="s-progress-circular__underlay"
        {...circleProps}
        stroke-dashoffset="0" />
    {/if}

    <circle
      class="s-progress-circular__overlay"
      {...circleProps}
      stroke-dashoffset={strokeDashOffset} />
  </svg>

  <div class="s-progress-circular__content">
    <slot />
  </div>
</div>

<style svelterial="../styles/Circular.scss">
</style>
