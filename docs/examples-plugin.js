import Prism from 'prismjs';
import 'prism-svelte';

export default {
  name: 'vite-plugin-svelterial-examples',
  enforce: 'pre',
  transform(code, id) {
    if (id.includes('examples')) {
      const highlighted = Prism.highlight(code, Prism.languages.svelte, 'svelte');
      const output = [
        '<script context="module">',
        `export const source = ${JSON.stringify(highlighted)};`,
        '</script>',
      ].join('\n');
      return {
        code: `${code}\n${output}`,
        map: { mappings: '' },
      };
    }
  },
};
