import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), prefetch()],
  output: "server",
  adapter: netlify()
});