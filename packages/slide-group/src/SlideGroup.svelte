<script context="module">
  export const SLIDE_GROUP = {};
</script>

<script>
  import { setContext, afterUpdate, getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { createSelect } from '@svelterialjs/core/utils/Group';
  import Icon from '@svelterialjs/core/src/Icon.svelte';

  /** @type {number} */
  let contentWidth;
  /** @type {number} */
  let wrapperWidth;

  /**
   * The classes to add to the slide group.
   */
  let klass = '';
  export { klass as class };

  /**
   * If `true`, the controls will be shown regardless of the position of the slide group.
   */
  export let showControls = true;

  /**
   * If `true`, the controls will not be visible when disabled.
   */
  export let hideDisabledControls = false;

  /**
   * If `true`, the active slide item will be at the center when clicked on.
   */
  export let centerActive = false;

  /**
   * The writable store with the 0 based index of the active slide item(s).
   */
  export let value = writable(null);

  /**
   * If `true`, multiple slide items can be selected.
   */
  export let multiple = false;

  /**
   * If `true`, there cannot less than 1 selected slide items.
   */
  export let mandatory = false;

  /**
   * The maximum number of items that can be selected.
   */
  export let max = Infinity;

  value.select = createSelect(value.update);

  const { arrow } = getContext('SVELTERIAL_ICONS');

  let startIndex = -1;
  let offset = 0;
  setContext(SLIDE_GROUP, {
    /**
     * @param {Element} item
     * @param {number} index
     */
    select: (item, index) => {
      value.select(index, { multiple, mandatory, max });
      const child = item.firstChild;
      const left = child.offsetLeft;
      const width = child.offsetWidth;

      if (centerActive) offset = left + (width - wrapperWidth) / 2;
      else if (left + 1.25 * width > wrapperWidth + offset) {
        offset = left + 1.25 * width - wrapperWidth;
      } else if (left < offset + width / 4) {
        offset = left - width / 4;
      }
    },
    getIndex() {
      startIndex += 1;
      return startIndex;
    },
    value,
  });

  afterUpdate(() => {
    if (offset + wrapperWidth > contentWidth) offset = contentWidth - wrapperWidth;
    else if (offset < 0) offset = 0;
  });

  export function next() {
    offset += wrapperWidth;
  }

  export function prev() {
    offset -= wrapperWidth;
  }

  /** @type {number} */
  let touchStartX;

  function touchstart({ touches }) {
    touchStartX = offset + touches[0].clientX;
  }

  function touchmove({ touches }) {
    offset = touchStartX - touches[0].clientX;
  }
</script>

<div class="s-slide-group {klass}">
  {#if wrapperWidth < contentWidth && showControls}
    <div class="s-slide-group__controls" class:is-hidden-disabled={hideDisabledControls}>
      <div class="s-slide-group__prev" class:is-disabled={offset === 0} on:click={prev}>
        <slot name="previous">
          <Icon path={arrow} />
        </slot>
      </div>
      <div
        class="s-slide-group__next"
        class:is-disabled={offset === contentWidth - wrapperWidth}
        on:click={next}>
        <slot name="next">
          <Icon path={arrow} --icon-rotate="180deg" />
        </slot>
      </div>
    </div>
  {/if}
  <div
    class="s-slide-group__wrapper"
    on:touchstart|passive={touchstart}
    on:touchmove|passive={touchmove}
    bind:clientWidth={wrapperWidth}>
    <div
      class="s-slide-group__content"
      style="transform:translate(-{offset}px)"
      bind:clientWidth={contentWidth}>
      <slot />
    </div>
  </div>
</div>

<style svelterial="../styles/SlideGroup.scss"></style>
