import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import rollupTypescript from "rollup-plugin-typescript2";
import { fileURLToPath } from "url";
import { terser } from "rollup-plugin-terser"; // 读取 package.json 配置
import pkg from "./package.json" assert { type: "json" }; // 当前运行环境，可通过 cross-env 命令行设置
import babel from "@rollup/plugin-babel";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = process.env.NODE_ENV; // umd 模式的编译结果文件输出的全局变量名称
const config = {
  // 入口文件，src/index.ts
  input: path.resolve(__dirname, "src/index.ts"),
  // 输出文件
  output: [
    // commonjs
    {
      // package.json 配置的 main 属性
      file: pkg.main,
      format: "cjs",
    },
    // es module
    {
      // package.json 配置的 module 属性
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    // 解析第三方依赖
    resolve(),
    // 识别 commonjs 模式第三方依赖
    commonjs(),
    // rollup 编译 typescript
    rollupTypescript(),
  ],
};
// 若打包正式环境，压缩代码
if (env === "production") {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
    })
  );
}

export default config;
