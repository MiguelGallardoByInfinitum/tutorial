import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://unique-kulfi-3dd027.netlify.app',
  integrations: [preact()]
});