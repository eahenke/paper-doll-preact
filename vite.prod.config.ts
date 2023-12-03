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
        outDir: './script-dist',
        lib: {
            entry: path.resolve(__dirname, 'src/widget.tsx'),
            name: 'paper-doll',
            fileName: format => `paper-doll.${format}.js`
        },
        rollupOptions: {
            output: {
                assetFileNames: 'paper-doll.[ext]'
            }
        }
    }
});
