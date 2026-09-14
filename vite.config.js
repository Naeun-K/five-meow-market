import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/five-meow-market/" : "/",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
}));
