import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            ssr: 'resources/js/ssr.ts',
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
        {
            name: 'ziggy',
            enforce: 'post',
            handleHotUpdate({ server, file }) {
                if (file.includes('/routes/') && file.endsWith('.php')) {
                    exec(
                        'php artisan ziggy:generate',
                        (error, stdout) => error === null && console.log(`  > Ziggy routes generated!`)
                    );
                }
            },
        },
    ],
    resolve: {
        alias: {
            ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue.m.js'),
            route: path.resolve('vendor/tightenco/ziggy/src/js/Route.js'),
            '@': '/resources/js',
        },
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
