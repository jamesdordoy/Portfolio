import '../css/app.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { createSSRApp, h } from 'vue';
import Notifications from 'notiwind';
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import VueScrollTo from 'vue-scrollto';
import fontAwesomeLibrary from '@/font-awesome.js';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import { Ziggy } from './ziggy';
import { route, ZiggyVue } from 'ziggy-js'


import type { Engine } from "tsparticles-engine"; 

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

const app = createInertiaApp({
    progress: {
        color: '#4B5563',
    },
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    async setup({ el, App, props, plugin }) {
        await fontAwesomeLibrary();

        return createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(VueScrollTo)
            .use(Notifications)
            .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY })
            .use(Particles, {
                init: async (engine: Engine) => {
                    await loadFull(engine);
                }
            })
            .mixin({ methods: { route } })
            .use(ZiggyVue, Ziggy)
            .component('font-awesome-icon', FontAwesomeIcon)
            .mount(el);
    },
});


