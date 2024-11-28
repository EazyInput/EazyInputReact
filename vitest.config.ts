import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: [...configDefaults.exclude],
      environment: "jsdom",
      setupFiles: "src/setup-tests.ts",
      globals: true,
    },
  })
);
