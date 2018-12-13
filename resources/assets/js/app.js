
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

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
Vue.component('particles-view',    require('./elements/particles.vue'));
Vue.component('contact-form',      require('./components/front/forms/ContactForm.vue'));
Vue.component('languages',         require('./components/front/lists/Languages.vue'));
Vue.component('projects',          require('./components/front/lists/Projects.vue'));
Vue.component('tweets',            require('./components/front/lists/TwitterTimeline.vue'));
Vue.component('languages-table',   require('./components/back/language/LanguagesTable.vue'));
Vue.component('projects-table',    require('./components/back/project/ProjectsTable.vue'));
Vue.component('project-create',    require('./components/back/project/Create.vue'));
Vue.component('repository-table',  require('./components/back/repository/RepositoryTable.vue'));
Vue.component('tweets-table',      require('./components/back/twitter/TweetsTable.vue'));
Vue.component('front-nav',         require('./components/front/generic/Nav.vue'));
Vue.component('particles',         require('./components/front/generic/Particles.vue'));
Vue.component('home-view',         require('./views/HomeView.vue'));
Vue.component('login-view',         require('./views/Login.vue'));

const app = new Vue({
    el: '#app'
});
