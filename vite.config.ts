import { defineConfig, searchForWorkspaceRoot } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        200: resolve(__dirname, "200.html"),
        // "oauth/callback": resolve(__dirname, "oauth/callback/index.html"),
        // "home": resolve(__dirname, "home/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [searchForWorkspaceRoot(process.cwd()), "."],
    },
    origin: "http://localhost:5173",
  },
});
