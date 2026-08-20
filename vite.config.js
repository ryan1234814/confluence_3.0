import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages project-site hosting (repo: confluence_3.0)
  base: "/",
  plugins: [react(), tailwindcss()],
});
