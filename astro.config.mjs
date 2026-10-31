import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  // Poza node_modules, żeby `pnpm install` nie kasował cache przyrostowego buildu. W CI przywraca go actions/cache.
  cacheDir: './.cache/astro',
  integrations: [
    sitemap(),
    robotsTxt(),
  ],
  site: 'https://zakupy.cskl.pl'
});
