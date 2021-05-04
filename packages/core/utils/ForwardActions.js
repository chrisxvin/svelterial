/**
 * @param {Node} node,
 * @param {Array} actions
 *
 * @example
 * <script>
 *  import ActionForward;
 *  export let use;
 * </script>
 * <element use:ActionForward={use} />
 *
 * <component use=[list_of_actions] />
 */
function ForwardActions(node, actions = []) {
  const lifecycle = actions.reduce((acc, action) => {
    if (Array.isArray(action)) {
      // action = [action_func, options]
      acc.push(action[0](node, action[1]));
    } else {
      // action = action_func
      acc.push(action(node));
    }
    return acc;
  }, []);

  return {
    update(newActions) {
      lifecycle.forEach((action, i) => {
        if (action && action.update) {
          const newAction = newActions[i];
          const newOptions = Array.isArray(newAction) ? newAction[1] : null;
          action.update(newOptions);
        }
      });
    },
    destroy() {
      lifecycle.forEach((action) => {
        if (action && action.destroy) action.destroy();
      });
    },
  };
}

export default ForwardActions;
