<script>
  /**
   * The classes to add to the column.
   * @type {string}
   */
  let klass = '';
  export { klass as class };

  /**
   * @typedef {'auto' | number} ColType
   */

  /**
   * The column size when screen size is 'xs'.
   * @type {ColType}
   */
  export let xs = 'auto';

  /**
   * The column size when screen size is 'sm'.
   * @type {ColType}
   */
  export let sm = 'auto';

  /**
   * The column size when screen size is 'md'.
   * @type {ColType}
   */
  export let md = 'auto';

  /**
   * The column size when screen size is 'lg'.
   * @type {ColType}
   */
  export let lg = 'auto';

  /**
   * The column size when screen size is 'xl'.
   * @type {ColType}
   */
  export let xl = 'auto';
</script>

<div
  class="s-col {klass}"
  class:is-xs-auto={xs === 'auto'}
  class:is-sm-auto={sm === 'auto'}
  class:is-md-auto={md === 'auto'}
  class:is-lg-auto={lg === 'auto'}
  class:is-xl-auto={xl === 'auto'}
  style="--s-xs:{xs};--s-sm:{sm};--s-md:{md};--s-lg:{lg};--s-xl:{xl};">
  <slot />
</div>

<style svelterial="../styles/Col.scss">
</style>
