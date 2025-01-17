import { defineConfig } from "vite";

const viteConfig = defineConfig({
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    host: "localhost",
    port: 8080,
  },
  css: {
    // 파일 소스맵 명시
    devSourcemap: true,
  },
});

export default viteConfig;
