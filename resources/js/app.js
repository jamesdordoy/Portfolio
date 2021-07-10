import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import * as Sentry from '@sentry/browser';

import DataTable from 'laravel-vue-datatable';
import VueToast from 'vue-toast-notification';
import VueTimeline from '@growthbunker/vuetimeline';
import * as Integrations from '@sentry/integrations';
import createPersistedState from 'vuex-persistedstate';
import 'vue-toast-notification/dist/theme-default.css';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import routes from './routes';
import state from './state/state';
import getters from './state/getters';
import mutations from './state/mutations';

import FormatDateFunction from './utils/format-date';
import DateDifferenceFunction from './utils/date-difference';
import CapitalizeStringFunction from './utils/capitalize-string';

require('./bootstrap');

window.moment = require('moment');
const VueScrollTo = require('vue-scrollto');

Sentry.init({
    dsn: process.env.MIX_SENTRY_DSN_PUBLIC,
    integrations: [new Integrations.Vue({ Vue, attachProps: true })],
});

Vue.use(Vuex);
Vue.use(VueToast);
Vue.use(VueTimeline);
Vue.use(VueScrollTo);
Vue.use(DataTable);
Vue.use(VueRouter);
Vue.use(VueReCaptcha, { siteKey: process.env.MIX_RECAPTCHA_SITE_KEY });

Vue.filter('formatDate', FormatDateFunction);
Vue.filter('dateDifference', DateDifferenceFunction);
Vue.filter('capitalize', CapitalizeStringFunction);

// Font Awesome Components
const FontAwesomeLoader = require('./loaders/font-awesome');

FontAwesomeLoader.load(Vue);

// Custom Components
const ComponentLoader = require('./loaders/components');

ComponentLoader.load(Vue);

// Sweet Alerts
const SwalLoader = require('./loaders/swal');

SwalLoader.load(Vue);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    plugins: [createPersistedState()],
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
    el: '#app',
    router,
    store,
});
