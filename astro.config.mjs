import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    vue(),
    svelte(),
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
    solid({
      include: ["**/solid/*"],
    }),
  ],
});
