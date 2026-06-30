// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site -> served at the domain root, so `base` stays "/".
export default defineConfig({
  site: 'https://knabsiraphop.github.io',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
