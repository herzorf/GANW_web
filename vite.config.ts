import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'IE 11'],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'es2015',
  },
  base: "/GANW/dist/"
})
