import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['IE 8'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
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
    cssTarget: "chrome58"
  },
  base: "/GANW/dist/"
})
