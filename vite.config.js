import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/five-meow-market/",

  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
});
