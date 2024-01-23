import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: process.env.GHUB_PAGES_RG_FJKZ65GDVZMf ? '/CloudflareDNSManager/' : '/',
})
