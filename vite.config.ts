import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/chat-widget/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // адрес вашего proxy сервера
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
      }
    }
  },
  plugins: [vue()]
})