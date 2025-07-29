import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: '.',
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@scss': path.resolve(__dirname, './src/scss'),
            '@js': path.resolve(__dirname, './src/js'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
            },
        },
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        emptyOutDir: true,
        rollupOptions: {
            input: './index.html',
        },
    },
    server: {
        open: true,
        port: 5173,
        strictPort: true,
        watch: {
            usePolling: true, // مخصوص ویندوز یا Docker
        },
    },
});
