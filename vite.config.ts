import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: process.env.GHUB_PAGES_RG_FJKZ65GDVZMf === "true" ? '/CloudflareDNSManager/' : '/',
  build: {
    rollupOptions: {
      output: {
        dir: path.resolve(__dirname, 'dist'),
        format: 'es',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js'
      }
    }
  }
})
