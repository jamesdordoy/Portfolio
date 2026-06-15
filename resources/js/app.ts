import '../css/app.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { createSSRApp, h, type DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import VueScrollTo from 'vue-scrollto';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createInertiaApp({
    resolve: (name: string): { default: DefineComponent } => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true }) as Record<string, { default: DefineComponent }>;
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(plugin)
            .use(pinia)
            .use(VueScrollTo)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY } as any)
            .mount(el);
    },
});

window.addEventListener('DOMContentLoaded', () => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: unknown[]): void {
        window.dataLayer.push(args);
    }

    gtag('js', new Date());
    gtag('config', 'UA-154219567-1');
});
