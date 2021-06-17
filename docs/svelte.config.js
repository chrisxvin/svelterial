import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import svelterial from 'vite-plugin-svelte-svelterial';

import examplesPlugin from './plugins/examples.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [mdsvex(mdsvexConfig), preprocess()],

  kit: {
    adapter: adapter(),
    target: '#svelte',
    files: {
      assets: 'static',
    },
    vite: () => ({
      plugins: [
        WindiCSS.default({
          scan: {
            fileExtensions: ['svelte', 'md'],
          },
          preflight: true,
        }),
        svelterial(),
        examplesPlugin,
      ],
    }),
  },
};

export default config;
