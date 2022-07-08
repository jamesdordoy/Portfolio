import { createApp, h } from 'vue';
import { createStore } from 'vuex';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { InertiaProgress } from '@inertiajs/progress';
import Particles from 'particles.vue3';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueScrollTo from 'vue-scrollto';

import state from '@/State/state.js';
import mutations from '@/State/mutations.js';

import _ from 'lodash';

import axios from 'axios';

import fontAwesomeLibrary from '@/loaders/font-awesome';

import '../css/app.css';

window._ = _;

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const store = createStore({
    state() {
        return state;
    },
    mutations,
});

const appName =
    window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        ).then((page) => page),
    async setup({ el, app, props, plugin }) {
        await fontAwesomeLibrary();

        const vue = createApp({ render: () => h(app, props) })
            .use(store)
            .use(plugin)
            .use(Particles)
            .use(VueScrollTo)
            .mixin({ methods: { route } })
            .component('font-awesome-icon', FontAwesomeIcon)
            .mount(el);

        return vue;
    },
});

InertiaProgress.init({ color: '#4B5563' });
