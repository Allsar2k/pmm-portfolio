import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// The site is served from https://<user>.github.io/pmm-portfolio/, so every
// asset and route is resolved against this base. It stays correct after the
// repository moves between accounts because the repository name is unchanged.
export default defineConfig({
  base: '/pmm-portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    sourcemap: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
});
