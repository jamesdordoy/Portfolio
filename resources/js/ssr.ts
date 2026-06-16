import '../css/app.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { createSSRApp, h, type DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

import { createPinia } from 'pinia';

import VueScrollTo from 'vue-scrollto';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const pinia = createPinia();

createInertiaApp({
    resolve: (name: string): { default: DefineComponent } => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true }) as Record<
            string,
            { default: DefineComponent }
        >;
        return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(plugin)
            .use(pinia)
            .use(VueScrollTo)
            .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY } as any);
    },
});
