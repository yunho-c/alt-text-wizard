/** @type {import('@sveltejs/kit').Config} */
import UnoCss from 'unocss/vite';
import { extractorSvelte } from 'unocss';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: [preprocess()],
  kit: {
    target: '#svelte',
    vite: {
      plugins: [UnoCss({ extractors: [extractorSvelte] })],
    },
  },
};

export default config;
