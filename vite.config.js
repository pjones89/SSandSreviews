import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        topTen: resolve(__dirname, "src/topTen/index.html"),
        specificTitle: resolve(__dirname, "src/specificTitle/index.html"),
        season: resolve(__dirname, "src/season/index.html"),
      },
    },
  },
});
