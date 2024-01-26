import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environmentMatchGlobs: [["src/*/.test.{tsx,ts}", "jsdom"]],
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    globals: true,
    css: true,
  },
});
