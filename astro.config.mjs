// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://funnyrakoon.github.io',
  base: '/projet-s5',
  vite: {
    plugins: [tailwindcss()]
  }
});