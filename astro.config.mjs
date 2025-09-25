// astro.config.mjs
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server", // ← This enables SSR
  adapter: node({
    mode: "standalone",
  }),

  // Your existing vite configuration (if any)
  vite: {
    // Keep your existing vite settings here
  },
});
