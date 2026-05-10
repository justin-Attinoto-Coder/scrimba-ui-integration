import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "home.html",
        cabins: "index.html",
        "design-system": "design-system.html",
      },
    },
  },
});
