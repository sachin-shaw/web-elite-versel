import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://web-elite-versel-lh40wwgxe-sachin-shaws-projects.vercel.app/",
    },
  },
});
