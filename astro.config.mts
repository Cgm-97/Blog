import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  site: 'https://cgm-csie.me',
  integrations: [sitemap(), expressiveCode(), tailwind(), pagefind()],
  markdown: {
    processor: unified({}),
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['@pagefind/default-ui']
      }
    }
  }
});
