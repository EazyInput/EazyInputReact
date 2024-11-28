import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        include: ["src/library/**"],
        thresholds: {
          branches: 100,
        },
      },
      exclude: [...configDefaults.exclude],
      environment: "jsdom",
      setupFiles: "src/setup-tests.ts",
      globals: true,
    },
  }),
);
