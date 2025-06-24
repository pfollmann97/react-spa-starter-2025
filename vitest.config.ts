import {defineConfig, mergeConfig} from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig(env =>
  mergeConfig(
    viteConfig(env),
    defineConfig({
      test: {
        globals: true,
        setupFiles: ['./setupTests.ts'],
        environment: 'jsdom',
        mockReset: true,
        reporters: [
          [
            'default',
            {
              summary: false,
            },
          ],
        ],
      },
    }),
  ),
);
