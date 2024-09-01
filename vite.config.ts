/// <reference types="vitest" />
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['json'],
    },
  },
});
