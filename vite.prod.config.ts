import path from 'path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact()],
    resolve: {
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat'
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.tsx'),
            name: 'paper-doll',
            fileName: format => `paper-doll.${format}.js`
        }
    }
});
