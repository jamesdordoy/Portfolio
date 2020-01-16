require('./bootstrap');

window.Vue = require('vue');
window.moment = require('moment');
var VueScrollTo = require('vue-scrollto');

import VueRouter from 'vue-router';
import routes from './routes.js';
import VueSweetalert2 from 'vue-sweetalert2';
import VueTimeline from "@growthbunker/vuetimeline";
import DataTable from 'laravel-vue-datatable';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Vue.use(VueTimeline);
Vue.use(VueScrollTo);
Vue.use(DataTable);
Vue.use(VueRouter);
Vue.use(VueSweetalert2, {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
});

Sentry.init({
  dsn: 'https://fa1a336bb87745c38b45c778226ca712@sentry.io/1549074',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

// Frontend
Vue.component('contact-form',           require('./front/forms/ContactForm.vue'));
Vue.component('login-form',             require('./front/forms/LoginForm.vue'));
Vue.component('front-nav',              require('./front/includes/Nav.vue'));
Vue.component('back-bar',              require('./front/includes/BackBar.vue'));
Vue.component('front-footer',           require('./front/includes/Footer.vue'));


// Backend
    // Forms
    // Modals
        Vue.component('languages-create-modal',   require('./back/language/CreateLanguageModal.vue'));
    // Tables
        Vue.component('tweets-table',      require('./back/twitter/TweetsTable.vue'));
    // Includes
        Vue.component('back-nav',          require('./back/includes/Nav.vue'));
    // Generic
        Vue.component('posts',             require('./back/blog/elements/Posts.vue'));
    //Views
        Vue.component('layout',         require('./back/views/Layout.vue'));
        Vue.component('project-create',    require('./back/project/Create.vue'));
        
// Generic
    Vue.component('back-modal',             require('./components/Modal.vue'));
    Vue.component('back-nav-link',          require('./components/NavLink.vue'));
    Vue.component('text-input',             require('./components/TextInput.vue'));
    Vue.component('file-input',             require('./components/FileInput.vue'));
    Vue.component('file-input-display',     require('./components/FileInputDisplay.vue'));
    Vue.component('form-group',             require('./components/FormGroup.vue'));
    Vue.component('form-error',             require('./components/FormError.vue'));
    Vue.component('textarea-input',         require('./components/TextareaInput.vue'));
    Vue.component('small-button',           require('./components/SmallButton.vue'));
    Vue.component('outline-button',         require('./components/OutlineButton.vue'));
    Vue.component('tailwind-select',        require('./components/TailwindSelect.vue'));
    Vue.component('timeline',               require('./components/Timeline.vue'));
    Vue.component('particles',              require('./components/Particles.vue'));
    Vue.component('tag',                    require('./components/Tag.vue'));
    Vue.component('paginator',              require('./components/Pagination'));
    Vue.component('data-table-filters',     require('./components/DataTableFilters'));


Vue.filter('formatDate', (value, format) => {
    if (!value) return '';
    return moment(value).isValid() ? moment(value).format(format) : '';
});

Vue.filter('capitalize', (value) => {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
});

const app = new Vue({
    el: '#app',
    router,
});
