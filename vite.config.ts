import { defineConfig } from "vite";
import electron from "vite-electron-plugin";

export default defineConfig({
  plugins: [
    electron({
      include: ["src"],
    }),
  ],
});
