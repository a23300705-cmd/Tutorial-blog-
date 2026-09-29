import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://astrotutorial23300705.netlify.app',
  integrations: [preact()]
});