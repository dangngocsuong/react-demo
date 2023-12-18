import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      page: path.resolve(__dirname, './src/page'),      
      router: path.resolve(__dirname, './src/router'),
      styles: path.resolve(__dirname, './src/styles'),
      types: path.resolve(__dirname, './src/types'),
      assets: path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  }
})
