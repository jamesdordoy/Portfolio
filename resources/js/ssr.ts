import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';

import '../css/app.css';
import 'swiper/css';
import 'swiper/css/navigation';

import state from '@/State/state.js';
import getters from '@/State/getters.js';
import { createStore } from 'vuex';
import Particles from 'particles.vue3';
import VueScrollTo from 'vue-scrollto';
import mutations from '@/State/mutations.js';
import Notifications from 'notiwind';
import fontAwesomeLibrary from '@/font-awesome.js';
import { createInertiaApp } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import { ZiggyVue } from 'ziggy';
import { Ziggy } from './ziggy';
import route from 'ziggy-js';

const store = createStore({
    plugins: [],
    state() {
        return state;
    },
    mutations,
    getters,
});

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
            return pages[`./Pages/${name}.vue`];
        },
        async setup({ App, props, plugin }) {
            await fontAwesomeLibrary();
            return createSSRApp({
                render: () => h(App, props),
            })
                .use(plugin)
                .use(store)
                .use(Particles)
                .use(VueScrollTo)
                .use(Notifications)
                .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY })
                .mixin({ methods: { route } })
                .use(ZiggyVue, Ziggy)
                .component('font-awesome-icon', FontAwesomeIcon);
        },
    })
);
