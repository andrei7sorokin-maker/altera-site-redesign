import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://altera.ee",
  adapter: node({
    mode: "standalone",
  }),
});

