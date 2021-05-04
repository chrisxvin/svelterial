import { bubble, listen } from 'svelte/internal';

/**
 * @example
 * ```js
 * import { current_component } from 'svelte/internal';
 * import ForwardEvents from '/ForwardEvents.js';
 * const events = ForwardEvents(current_component);
 *
 * <component use:events />
 * ```
 */
function ForwardEvents(component) {
  return (node) => {
    if (component) {
      const events = Object.keys(component.$$.callbacks);
      const listeners = [];

      events.forEach((event) =>
        listeners.push(listen(node, event, (e) => bubble(component, e))),
      );

      return {
        destroy: () => {
          listeners.forEach((listener) => listener());
        },
      };
    }
  };
}

export default ForwardEvents;
