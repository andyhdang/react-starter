import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Set this to your GitHub repository name when deploying to GitHub Pages.
  // For https://<user>.github.io/my-react-app-starter/, keep '/my-react-app-starter/'.
  base: "/react-starter/",
  plugins: [react()],
});
