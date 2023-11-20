import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
    assetsInlineLimit: 0,
    assetsInclude: ['**/*.json', 'assets/orals/**/*', 'assets/injectable/**/*'],
  },
});