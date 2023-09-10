// also don't forget to `npm i -D @types/node`, so __dirname won't complain

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@container', replacement: path.resolve(__dirname, 'src/container') },
      {find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      {find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
      {find: '@assets', replacement: path.resolve(__dirname, 'src/assets')}
    ]
  }
})
