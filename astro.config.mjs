// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

const env = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), "");

const imagesDomain = env.IMAGES_URL ? new URL(env.IMAGES_URL).hostname : '';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: vercel(),
  image: {
    domains: [imagesDomain],
  },
  vite: {
    //@ts-expect-error
    plugins: [tailwindcss()],
  },
});