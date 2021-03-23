/**
 * This is the PostCSS plugin that makes the selectors global
 */

import type { Rule, AtRule } from 'postcss';

const plugin = () => ({
  postcssPlugin: 'svelterial-global',
  Rule(rule: Rule) {
    if (!rule.selector.startsWith(':global')) {
      rule.replaceWith(
        rule.clone({ selectors: rule.selectors.map((s) => `:global(${s})`) }),
      );
    }
  },
  AtRule: {
    keyframes: (atRule: AtRule) => {
      if (!atRule.params.startsWith('-global-')) {
        atRule.replaceWith(atRule.clone({ params: `-global-${atRule.params}` }));
      }
    },
  },
});

plugin.postcss = true;

export default plugin;
