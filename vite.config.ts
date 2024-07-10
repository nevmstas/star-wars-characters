import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  base: '/star-wars-characters',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
})
