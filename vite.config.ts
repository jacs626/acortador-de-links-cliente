import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    // Solo abre el navegador si estamos en desarrollo
    open: false,
    port: 3000,
  },
});
