import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import inertia from '@inertiajs/vite';

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
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    test: {
        globals: true,
        setupFiles: ['resources/js/Tests/setup.ts'],
        coverage: {
            reportsDirectory: './storage/coverage',
        },
        environment: 'happy-dom',
    },
});
