import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, "src")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ 
      // 自动导入 相关 组件
      imports: ['vue', 'vue-router','pinia'],
      resolvers: [
        ElementPlusResolver(),
      ],
      
      dts: path.resolve(pathSrc, "auto-imports.d.ts")
     }),
     Components({
      dirs: ['src/components'], // 要搜索组件的目录
      extensions: ['vue'],// 组件有效扩展名
      resolvers: [
        
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],

      dts: path.resolve(pathSrc, "components.d.ts")
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
