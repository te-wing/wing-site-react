import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vike({
      pages: 'src/pages', // ページのディレクトリを指定
      prerender: true, // プリレンダリングを有効化
    })
  ],
})
