import '../css/app.css';
import 'swiper/css';
import 'swiper/css/navigation';

import state from '@/Stores/Theme/state.js';
import getters from '@/Stores/Theme/getters.js';
import mutations from '@/Stores/Theme/mutations.js';
import { createSSRApp, h } from 'vue';
import { createStore } from 'vuex';
import Notifications from 'notiwind';
import Particles from 'particles.vue3';
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
import VueScrollTo from 'vue-scrollto';
import fontAwesomeLibrary from '@/font-awesome.js';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import { Ziggy } from './ziggy';
import { route, ZiggyVue } from 'ziggy-js'


import type { Engine } from "tsparticles-engine"; 


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
            .use(plugin);

            vue.use(VueScrollTo)
            .use(Notifications)
            .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY })
            .use(Particles, {
                init: async engine => {
                    // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
                    await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
                },
            })
            .mixin({ methods: { route } })
            .use(ZiggyVue, Ziggy)
            .component('font-awesome-icon', FontAwesomeIcon);

            const component = vue.mount(el);

        return component;
    },
});


