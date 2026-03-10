// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://markostankovic.org',
  redirects: {
    '/blog': '/devlog',
    '/blog/[slug]': '/devlog/[slug]',
  },
  markdown: { syntaxHighlight: false },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
