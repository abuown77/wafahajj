import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Detect GitHub Pages preview environment
// When DEPLOY_TARGET=gh-pages, build for https://abuown77.github.io/wafahajj/
// Otherwise (production, Cloudflare Pages), build for https://wafahajj.com/
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

// https://astro.build/config
export default defineConfig({
  site: isGhPages ? 'https://abuown77.github.io' : 'https://wafahajj.com',
  base: isGhPages ? '/wafahajj/' : '/',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
