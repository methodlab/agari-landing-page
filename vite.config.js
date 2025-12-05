import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    watch: {
      usePolling: true,  // More reliable file watching, especially on macOS with network drives or paths with spaces
      interval: 100,     // Polling interval in ms
    },
    hmr: {
      overlay: true,     // Show errors as overlay
    },
  },
});

