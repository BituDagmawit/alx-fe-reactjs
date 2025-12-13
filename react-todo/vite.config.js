import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'], // Ensure this path is correct
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    globals: true, // IMPORTANT: Keeps 'expect' and 'test' global
  },
});