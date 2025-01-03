import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'repository-name' with the actual name of your GitHub repository
export default defineConfig({
  base: "/cicdtodo/", // This should be the path relative to your GitHub Pages
  plugins: [react()],
});
