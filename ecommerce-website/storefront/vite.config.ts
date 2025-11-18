// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,         // allows access from Docker / LAN
    port: 5173,
    proxy: {
      "/api": {
        target: "http://gateway:8080",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
