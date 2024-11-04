// vite.config.js
import react from "file:///C:/Users/ADMIN/Desktop/react-chatbotify/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/ADMIN/Desktop/react-chatbotify/node_modules/vite-plugin-svgr/dist/index.js";
import dts from "file:///C:/Users/ADMIN/Desktop/react-chatbotify/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
import eslint from "file:///C:/Users/ADMIN/Desktop/react-chatbotify/node_modules/vite-plugin-eslint/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///C:/Users/ADMIN/Desktop/react-chatbotify/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\ADMIN\\Desktop\\react-chatbotify";
var vite_config_default = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    root: "src",
    build: {
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "src/index.tsx"),
        name: "react-chatbotify",
        fileName: "index",
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React"
          },
          intro: 'import "./style.css";'
        }
      },
      outDir: "../dist"
    },
    assetsInclude: ["**/*.svg", "**/*.png", "**/*.wav"],
    plugins: [
      svgr({
        svgrOptions: {
          ref: true
        }
      }),
      react({
        include: "**/*.{jsx,tsx}"
      }),
      dts(),
      eslint()
    ],
    server: {
      port: 3e3,
      host: true
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBRE1JTlxcXFxEZXNrdG9wXFxcXHJlYWN0LWNoYXRib3RpZnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFETUlOXFxcXERlc2t0b3BcXFxccmVhY3QtY2hhdGJvdGlmeVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQURNSU4vRGVza3RvcC9yZWFjdC1jaGF0Ym90aWZ5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGVzbGludCBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50XCI7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHttb2RlfSkgPT4ge1xyXG4gIFxyXG4gIHByb2Nlc3MuZW52ID0gey4uLnByb2Nlc3MuZW52LCAuLi5sb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpfTtcclxuICBcclxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcclxuICAgIHJvb3Q6IFwic3JjXCIsXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBsaWI6IHtcclxuICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHN4XCIpLFxyXG4gICAgICAgIG5hbWU6IFwicmVhY3QtY2hhdGJvdGlmeVwiLFxyXG4gICAgICAgIGZpbGVOYW1lOiBcImluZGV4XCIsXHJcbiAgICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW50cm86ICdpbXBvcnQgXCIuL3N0eWxlLmNzc1wiOycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgb3V0RGlyOiBcIi4uL2Rpc3RcIixcclxuICAgIH0sXHJcbiAgICBhc3NldHNJbmNsdWRlOiBbXCIqKi8qLnN2Z1wiLCBcIioqLyoucG5nXCIsIFwiKiovKi53YXZcIl0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHN2Z3Ioe1xyXG4gICAgICAgIHN2Z3JPcHRpb25zOiB7XHJcbiAgICAgICAgICByZWY6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIHJlYWN0KHtcclxuICAgICAgICBpbmNsdWRlOiBcIioqLyoue2pzeCx0c3h9XCIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBkdHMoKSxcclxuICAgICAgZXNsaW50KClcclxuICAgIF0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgcG9ydDogMzAwMCxcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVCxPQUFPLFdBQVc7QUFDblUsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBRW5CLFNBQVMsY0FBYyxlQUFlO0FBTnRDLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsQ0FBQyxFQUFDLEtBQUksTUFBTTtBQUV6QixVQUFRLE1BQU0sRUFBQyxHQUFHLFFBQVEsS0FBSyxHQUFHLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQyxFQUFDO0FBRTlELFNBQU8sYUFBYTtBQUFBLElBQ2xCLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxRQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxRQUM5QyxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDdkI7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxRQUMvQixRQUFRO0FBQUEsVUFDTixTQUFTO0FBQUEsWUFDUCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0EsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsZUFBZSxDQUFDLFlBQVksWUFBWSxVQUFVO0FBQUEsSUFDbEQsU0FBUztBQUFBLE1BQ1AsS0FBSztBQUFBLFFBQ0gsYUFBYTtBQUFBLFVBQ1gsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYLENBQUM7QUFBQSxNQUNELElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogW10KfQo=
