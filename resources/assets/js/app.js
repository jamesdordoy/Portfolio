
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./helpers.js');

import VueRouter from 'vue-router';
import routes from './routes.js';

window.Vue = require('vue');
window.moment = require('moment');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
});  

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('contact-form',      require('./components/front/forms/ContactForm.vue'));
Vue.component('languages',         require('./components/front/lists/Languages.vue'));
Vue.component('projects',          require('./components/front/lists/Projects.vue'));
Vue.component('tweets',            require('./components/front/lists/TwitterTimeline.vue'));
Vue.component('languages-table',   require('./components/back/language/LanguagesTable.vue'));
Vue.component('projects-table',    require('./components/back/project/ProjectsTable.vue'));
Vue.component('project-create',    require('./components/back/project/Create.vue'));
Vue.component('repository-table',  require('./components/back/repository/RepositoryTable.vue'));
Vue.component('tweets-table',      require('./components/back/twitter/TweetsTable.vue'));
Vue.component('front-nav',         require('./components/front/includes/Nav.vue'));
Vue.component('particles',         require('./components/front/generic/Particles.vue'));
Vue.component('home-view',         require('./components/front/views/HomeView.vue'));
Vue.component('login-view',         require('./components/front/views/LoginView.vue'));

Vue.component('back-nav',          require('./components/back/includes/Nav.vue'));
Vue.component('back-nav-link',     require('./components/back/generic/NavLink.vue'));
Vue.component('back-modal',         require('./components/back/generic/Modal.vue'));

Vue.component('languages-create-modal',   require('./components/back/language/CreateLanguageModal.vue'));

Vue.component('text-input',         require('./components/back/generic/TextInput.vue'));
Vue.component('file-input',         require('./components/back/generic/FileInput.vue'));
Vue.component('form-group',         require('./components/back/generic/FormGroup.vue'));
Vue.component('textarea-input',         require('./components/back/generic/TextareaInput.vue'));
Vue.component('outline-button',         require('./components/back/generic/OutlineButton.vue'));


const app = new Vue({
    el: '#app',
    router
});
