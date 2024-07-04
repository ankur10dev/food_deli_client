import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "public", // Directory containing index.html
  build: {
    outDir: "../dist", // Output directory for built files
  },
});
