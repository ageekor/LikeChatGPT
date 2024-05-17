import { ConfigEnv, defineConfig, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 引入插件

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  const root = process.cwd();
  const ENV = loadEnv(mode, root);
  console.log("当前环境：", mode);
  console.log("ENV:", ENV);

  return defineConfig({
    plugins: [vue(), vueSetupExtend()],
    resolve: {
      alias: {
          "@": path.join(__dirname, "src")
      },
      extensions: [".js", ".d.ts", ".ts", ".jsx", ".tsx", ".json"]
  },
    base: "/",
    server: {
      open: true, // 项目启动默认打开浏览器
      host: "0.0.0.0",
      port: 6007,
    },
    build: {
      outDir: path.join("./dist"),
      assetsDir: "assets",
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, "index.html"),
        },
      },
    },
  });
};
