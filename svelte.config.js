/** @type {import('@sveltejs/kit').Config} */
import UnoCss from 'unocss/vite';
import { extractorSvelte } from 'unocss';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
  preprocess: [preprocess()],
  kit: {
    target: '#svelte',
    vite: {
      plugins: [UnoCss({ extractors: [extractorSvelte] })],
    },
    adapter: adapter(),
    appDir: 'app'
  },
};

export default config;
