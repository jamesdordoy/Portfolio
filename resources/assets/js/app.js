
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('particles.js');
window.Vue = require('vue');
window.moment = require('moment');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Elements

Vue.component('home-view',         require('./views/Home.vue'));

Vue.component('particles-view',    require('./elements/particles.vue'));

//Front
Vue.component('contact-form',      require('./components/front/contact/ContactForm.vue'));
Vue.component('languages',         require('./components/front/language/Languages.vue'));
Vue.component('projects',          require('./components/front/project/Projects.vue'));
Vue.component('tweets',            require('./components/front/twitter/TwitterTimeline.vue'));

//Back
Vue.component('languages-table',   require('./components/back/language/LanguagesTable.vue'));
Vue.component('projects-table',    require('./components/back/project/ProjectsTable.vue'));
Vue.component('project-create',    require('./components/back/project/Create.vue'));
Vue.component('repository-table',  require('./components/back/repository/RepositoryTable.vue'));
Vue.component('tweets-table',      require('./components/back/twitter/TweetsTable.vue'));

//Views
Vue.component('home-view',         require('./views/Home.vue'));
Vue.component('coming-soon',       require('./views/ComingSoon.vue'));






const app = new Vue({
    el: '#app'
});
