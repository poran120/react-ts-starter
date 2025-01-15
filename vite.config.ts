import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

// vite plugins
import react from '@vitejs/plugin-react-swc';
import Fonts from 'unplugin-fonts/vite';
import { compression } from 'vite-plugin-compression2';
import Inspect from 'vite-plugin-inspect';
import svgr from 'vite-plugin-svgr';

import { fonts } from './configs/fonts.config';

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    Inspect(),
    compression(),
    Fonts({ google: { families: fonts } }),
    AutoImport({
      imports: ['react', 'react-router'],
      dts: './auto-imports.d.ts',
      eslintrc: { filepath: './eslint.config.js' },
      dirs: ['./src/components/ui'], // no need to import shadcn ui components, Just use it as you want. add more if you want
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
