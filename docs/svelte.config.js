import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import svelterial from 'vite-plugin-svelte-svelterial';
import svelterialConfig from './svelterial.config.js';

import examplesPlugin from './examples-plugin.js';

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
        }),
        svelterial(svelterialConfig),
        examplesPlugin,
      ],
    }),
  },
};

export default config;
