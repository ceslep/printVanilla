import { defineConfig } from 'vite'
import * as path  from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve:{
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})
