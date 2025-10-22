import sitemap from "@astrojs/sitemap";
import lottie from "astro-integration-lottie";
import { defineConfig } from "astro/config";
import { settings } from "./src/data/settings";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  output: "static", // Add this line to configure static output
  integrations: [sitemap(), lottie()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
