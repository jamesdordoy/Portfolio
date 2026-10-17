import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import inertia from '@inertiajs/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
                useVueStyleLoader: true,
            },
        }),
        inertia(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    // Bundle all dependencies into bootstrap/ssr/ssr.js so the SSR container needs no node_modules
    ssr: {
        noExternal: true,
    },
    test: {
        globals: true,
        setupFiles: ['resources/js/tests/setup.ts'],
        coverage: {
            reportsDirectory: './storage/coverage',
        },
        environment: 'happy-dom',
    },
});
