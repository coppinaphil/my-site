// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import robotsTxt from 'astro-robots-txt';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), robotsTxt()],
  adapter: netlify()
});