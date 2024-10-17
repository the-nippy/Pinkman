
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  root: 'src/renderer',
  build: {
    outDir: '../../dist'
  }
});