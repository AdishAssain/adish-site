// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/postcss";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [tailwind],
      },
    },
  },
});
