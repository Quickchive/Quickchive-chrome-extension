import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {},
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                  @import "@/assets/scss/variables.scss";
              `,
      },
    },
  },
});
