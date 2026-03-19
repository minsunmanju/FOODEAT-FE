import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "FOODEAT",
        short_name: "FOODEAT",
        description: "혼밥러를 위한 식사 기록 서비스",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src:"/burger.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/burger.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/burger.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});