/**
 * @typedef {object} Options
 * @property {boolean} multiple
 * @property {boolean} mandatory
 * @property {number} max
 */

/**
 * Creates a select group.
 * @param {any} value
 */
export function createSelect(value) {
  let $value;
  const destroySelect = value.subscribe((_) => ($value = _));

  /**
   * Select an item from a list.
   * @param {string | number} val
   * @param {Options} options
   */
  function select(val, { multiple, mandatory, max }) {
    if (multiple) {
      if (!Array.isArray($value)) value.set([]);
      if ($value.includes(val)) {
        if (!mandatory || $value.length > 1) {
          const temp = [...$value];
          temp.splice(temp.indexOf(val), 1);
          value.set(temp);
        }
      } else if ($value.length < max) value.set([...$value, val]);
    } else if (val === $value) {
      if (!mandatory) value.set(null);
    } else value.set(val);
  }

  function isActive(val) {
    return Array.isArray($value) ? $value.includes(val) : val === $value;
  }

  return [select, destroySelect, isActive];
}
