import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://a23300705-cmd.github.io',
  base: '/Tutorial-blog-',
  integrations: [preact()],
});