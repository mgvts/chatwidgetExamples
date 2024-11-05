import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/chatwidgetExamples/',
  server: {
    proxy: {
      '/api': {
        target: 'https://mgvts.github.io/chatwidgetExamples/chat', 
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