import { defineConfig } from 'vite' // 动态配置函数
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [createVuePlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/global.scss"; @use "@/assets/scss/variable.scss";'
      }
    }
  },
  server: {
    open: true, // 自动打开浏览器
    port: 8080, // 端口号
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true
      },
      '/music': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      }
    }
  },
  resolve: {
    // 别名
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  }
})
