/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.tsx',
    mockReset: false,
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
      reporter: ['text'],
    },
  },
});
