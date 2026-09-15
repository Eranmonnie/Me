import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/gc/count.js": {
        target: "https://gc.zgo.at",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gc/, ""),
      },
      "/gc/count": {
        target: "https://eranmonnie.goatcounter.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gc/, ""),
      },
    },
  },
});
