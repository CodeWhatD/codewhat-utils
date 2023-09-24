import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["node_modules/*", "dist/*"],
    clearMocks: true, // 清除模拟历史记录
    environment: "node",
    testTransformMode: {
      // vitest内部执行esbuild时可以转换的资源
      web: ["ts", "js", "tsx", "js"],
    },
  },
  optimizeDeps: {
    disabled: true,
  },
});
