<script>
  let klass = '';
  export { klass as class };
  export let indeterminate = false;
  export let color = 'var(--s-primary-base)';
  export let rotate = 0;
  export let size = 32;
  export let value = 0;
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
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={value}
  class="s-circular-progress {klass}"
  class:s-circular-progress--indeterminate={indeterminate}
  style="width:{size}px;height:{size}px;color:{color};">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="{viewBoxSize} {viewBoxSize} {2 * viewBoxSize} {2 * viewBoxSize}"
    style="transform: rotate({rotate}deg)">
    {#if !indeterminate}
      <circle
        class="s-circular-progress__underlay"
        {...circleProps}
        stroke-dashoffset="0" />
    {/if}

    <circle
      class="s-circular-progress__overlay"
      {...circleProps}
      stroke-dashoffset={strokeDashOffset} />
  </svg>

  <div class="s-circular-progress__content">
    <slot />
  </div>
</div>

<style svelterial="./styles/Circular.scss">
</style>
