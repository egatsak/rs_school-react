import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// import.meta.env.VITE_API_URL - save in .env
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __API__: JSON.stringify("https://the-one-api.dev/v2"),
    __API_KEY__: JSON.stringify("eQT0PS_X0w7MQDiNoPoE"),
    __PROJECT__: JSON.stringify("frontend"),
  },
});
