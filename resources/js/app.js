require('./bootstrap');

window.moment = require('moment');
const VueScrollTo = require('vue-scrollto');

import Vue from 'vue';
import Vuex from 'vuex';
import routes from './routes.js';
import VueRouter from 'vue-router';
import * as Sentry from '@sentry/browser';
import VueSweetalert2 from 'vue-sweetalert2';
import DataTable from 'laravel-vue-datatable';
import VueTimeline from "@growthbunker/vuetimeline";
import * as Integrations from '@sentry/integrations';
import createPersistedState from "vuex-persistedstate";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin, faJsfiddle } from '@fortawesome/free-brands-svg-icons';
import { faCog, faTimes, faSignOutAlt, faCheck, faSignInAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';

library.add(
    faCog,
    faTimes,
    faSignInAlt,
    faSignOutAlt,
    faCheck,
    faDatabase,
    faGithub,
    faFacebook,
    faTwitter,
    faLinkedin,
    faJsfiddle
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex);
Vue.use(VueTimeline);
Vue.use(VueScrollTo);
Vue.use(DataTable);
Vue.use(VueRouter);
Vue.use(VueSweetalert2, {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
});

Sentry.init({
  dsn: process.env.MIX_SENTRY_DSN_PUBLIC,
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

// Modals
Vue.component('languages-create-modal',   require('./back/language/CreateLanguageModal.vue').default);
// Tables
Vue.component('tweets-table',      require('./back/twitter/TweetsTable.vue').default);
// Includes
Vue.component('back-nav',          require('./back/includes/Nav.vue').default);
// Generic
Vue.component('posts',             require('./back/blog/elements/Posts.vue').default);
//Views
Vue.component('layout',         require('./back/views/Layout.vue').default);
Vue.component('project-create',    require('./back/project/Create.vue').default);

// Generic
Vue.component('back-modal',             require('./components/Modal.vue').default);
Vue.component('back-nav-link',          require('./components/NavLink.vue').default);
Vue.component('text-input',             require('./components/TextInput.vue').default);
Vue.component('file-input',             require('./components/FileInput.vue').default);
Vue.component('file-input-display',     require('./components/FileInputDisplay.vue').default);
Vue.component('form-group',             require('./components/FormGroup.vue').default);
Vue.component('form-error',             require('./components/FormError.vue').default);
Vue.component('textarea-input',         require('./components/TextareaInput.vue').default);
Vue.component('small-button',           require('./components/SmallButton.vue').default);
Vue.component('outline-button',         require('./components/OutlineButton.vue').default);
Vue.component('tailwind-select',        require('./components/TailwindSelect.vue').default);
Vue.component('timeline',               require('./components/Timeline.vue').default);
Vue.component('particles',              require('./components/Particles.vue').default);
Vue.component('tag',                    require('./components/Tag.vue').default);
Vue.component('paginator',              require('./components/Pagination').default);
Vue.component('data-table-filters',     require('./components/DataTableFilters').default);

import FormatDateFunction from './utils/format-date';
import CapitalizeStringFunction from './utils/capitalize-string';

Vue.filter('formatDate', FormatDateFunction);
Vue.filter('capitalize', CapitalizeStringFunction);

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
});

import state from './state/state';
import getters from './state/getters';
import mutations from './state/mutations';

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    plugins: [createPersistedState()],
});

const app = new Vue({
    el: '#app',
    router,
    store,
});
