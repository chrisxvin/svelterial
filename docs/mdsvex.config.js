import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

loadLanguages(['bash', 'scss', 'typescript']);

const alias = {
  javascript: 'js',
  bash: 'sh',
  shell: 'sh',
  typescript: 'ts',
};

function formatLanguage(lang) {
  return alias[lang] || lang;
}

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  extensions: ['.md'],
  layout: './src/lib/components/MarkdownLayout.svelte',
  remarkPlugins: [
    [
      require('remark-github'),
      {
        // Use your own repository
        repository: 'https://github.com/svelterialjs/svelterial.git',
      },
    ],
  ],
  highlight: {
    highlighter: (code, lang) => {
      function escape(text) {
        return `{@html \`${text.replace(/`/g, '&#96;')}\`}`;
      }

      if (lang && Prism.languages[lang]) {
        const parsed = Prism.highlight(code, Prism.languages[lang]);
        const escaped = escape(parsed);
        return [
          `<Components.Markup lang='${formatLanguage(lang)}'>`,
          escaped,
          '</Components.Markup>',
        ].join('\n');
      }
      const escaped = escape(code);
      return `<Components.Markup>${escaped}</Components.Markup>`;
    },
  },
};
