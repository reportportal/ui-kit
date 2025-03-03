/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      exclude: ['**/*.stories.tsx', '**/*.stories.ts', '**/*.test.{ts,tsx}'],
      include: [
        'src/components/button/**/*.{ts,tsx}',
        'src/components/checkbox/**/*.{ts,tsx}',
        'src/components/baseIconButton/**/*.{ts,tsx}',
        'src/components/bubblesLoader/**/*.{ts,tsx}',
        'src/components/radio/**/*.{ts,tsx}',
        'src/components/fieldText/**/*.{ts,tsx}',
        'src/components/spinLoader/**/*.{ts,tsx}',
        'src/components/systemAlert/**/*.{ts,tsx}',
        'src/components/systemMessage/**/*.{ts,tsx}',
        'src/components/toggle/**/*.{ts,tsx}',
        'src/components/fieldNumber/**/*.{ts,tsx}',
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@common': resolve(__dirname, './src/common'),
    },
  },
});
