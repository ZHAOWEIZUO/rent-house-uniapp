/*
 * @Author: zwz
 * @Date: 2023-05-31 14:57:44
 * @LastEditors: zwz
 * @LastEditTime: 2023-11-21 22:13:10
 * @Description: 请填写简介
 */
import { defineConfig, normalizePath } from 'vite'
import { join } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
const variablePath = normalizePath(path.resolve('./src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
})
