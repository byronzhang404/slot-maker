import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Handle client-side routing
    historyApiFallback: true,
  },
  preview: {
    // Handle client-side routing in preview mode
    historyApiFallback: true,
  },
});