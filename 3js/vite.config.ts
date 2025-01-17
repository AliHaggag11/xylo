import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
