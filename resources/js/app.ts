import '../css/app.css';
import 'swiper/css';
import 'swiper/css/navigation';

import state from '@/State/state.js';
import getters from '@/State/getters.js';
import { createSSRApp, h } from 'vue';
import { createStore } from 'vuex';
import Notifications from 'notiwind';
import Particles from 'particles.vue3';
import VueScrollTo from 'vue-scrollto';
import mutations from '@/State/mutations.js';
import fontAwesomeLibrary from '@/font-awesome.js';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
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

        const vue = createSSRApp({ render: () => h(App, props) })
            .use(store)
            .use(plugin)
            .use(Particles)
            .use(VueScrollTo)
            .use(Notifications)
            .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY })
            .mixin({ methods: { route } })
            .use(ZiggyVue, Ziggy)
            .component('font-awesome-icon', FontAwesomeIcon)
            .mount(el);

        return vue;
    },
});
