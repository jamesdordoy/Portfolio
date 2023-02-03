import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';

import '../css/app.css';
import state from '@/State/state.js';
import getters from '@/State/getters.js';
import { createStore } from 'vuex';
import Particles from 'particles.vue3';
import VueScrollTo from 'vue-scrollto';
import mutations from '@/State/mutations.js';
import fontAwesomeLibrary from '@/font-awesome.js';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    plugins: [createPersistedState()],
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
                .use(plugin)
                .use(Particles)
                .use(VueScrollTo)
                .mixin({ methods: { route } })
                .component('font-awesome-icon', FontAwesomeIcon);
        },
    })
);
