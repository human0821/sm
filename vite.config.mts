import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';
import vitePluginSvgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    vitePluginSvgr({
      svgrOptions: {}
    })
  ],
  build: {},
  preview: {
    host: '0.0.0.0',
    port: 5173
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'root': path.resolve(__dirname, '.')
    },
  }
});
