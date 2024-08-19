import '../css/app.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { createSSRApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

import VueScrollTo from 'vue-scrollto';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import '@/font-awesome.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { Ziggy } from './ziggy';
import { route, ZiggyVue } from 'ziggy-js';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
            return pages[`./Pages/${name}.vue`];
        },
        setup({ App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),
            })
                .component('font-awesome-icon', FontAwesomeIcon)
                .use(plugin)
                .use(pinia)
                .use(VueScrollTo)
                .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY })
                .use(Particles, {
                    init: async (engine: Engine) => {
                        await loadFull(engine);
                    },
                    install: () => {

                    }
                })
                .mixin({ methods: { route } })
                .use(ZiggyVue, Ziggy);
        },
    })
);