require('./bootstrap');

import { createApp, h } from 'vue';
import { createStore } from 'vuex';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Particles from "particles.vue3";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

var VueScrollTo = require('vue-scrollto');

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

import state from '@/State/state.js';
import mutations from '@/State/mutations.js';

const store = createStore({
    state () {
      return state
    },
    mutations,
});

// Font Awesome Components
const FontAwesomeLoader = require('@/Loaders/font-awesome.js');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {

        const libary = FontAwesomeLoader.load(app);

        const vue = createApp({ render: () => h(app, props) })
            .use(store)
            .use(plugin)
            .use(Particles)
            .use(VueScrollTo)
            .mixin({ methods: { route } })
            .component("font-awesome-icon", FontAwesomeIcon)
            .mount(el);

        return vue;
    },
});

InertiaProgress.init({ color: '#4B5563' });
