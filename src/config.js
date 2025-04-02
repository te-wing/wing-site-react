import { defineConfig } from 'vike';

export default defineConfig({
  // ページのディレクトリを指定
  pages: 'src/pages',
  prerender: true, // プリレンダリングを有効化
})