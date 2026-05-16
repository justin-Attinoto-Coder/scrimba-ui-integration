import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 3000,
  },
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
