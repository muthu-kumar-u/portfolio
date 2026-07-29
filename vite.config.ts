import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set this to your repo name when deploying to GitHub Pages, e.g. "/muthukumar-portfolio/".
  // Leave as "/" for Vercel or a custom domain.
  base: "/portfolio/",
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    // The R3F hero scene (three.js + drei + postprocessing) is intentionally
    // lazy-loaded as its own chunk (see the `lazy()` import in Hero.tsx), so
    // its larger size doesn't affect the initial page load.
    chunkSizeWarningLimit: 1000,
  },
});
