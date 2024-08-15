import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";
import Icons from "unplugin-icons/vite";
import { UndrawUiResolver } from 'undraw-ui/es/resolvers'
import IconsResolve from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver(),UndrawUiResolver],
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
  ],
});
