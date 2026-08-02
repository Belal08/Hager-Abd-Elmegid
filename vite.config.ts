import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Hager-Abd-Elmegid/",
  build: { outDir: "dist", emptyOutDir: true },
});
