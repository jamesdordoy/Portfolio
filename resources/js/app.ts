import '../css/app.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { createSSRApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import VueScrollTo from 'vue-scrollto';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { Ziggy } from './ziggy';
import { route, ZiggyVue } from 'ziggy-js';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createInertiaApp({
    progress: {
        color: '#4B5563',
    },
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(plugin)
            .use(pinia)
            .use(VueScrollTo)
            .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY })
            .mixin({ methods: { route } })
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});
