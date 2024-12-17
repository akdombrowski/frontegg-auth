import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";
// import webfontDownload from "vite-plugin-webfont-dl";

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      input: {
        "main": resolve(__dirname, "index.html"),
        200: resolve(__dirname, "200.html"),
        "oauth/callback": resolve(__dirname, "oauth/callback.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
