
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.Moment = require('moment');

console.log(window.Moment);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.component('tweets', require('./components/TwitterTimeline.vue'));
Vue.component('tweets-table', require('./components/TweetsTable.vue'));
Vue.component('projects', require('./components/Projects.vue'));
Vue.component('languages', require('./components/Languages.vue'));
Vue.component('contact-form', require('./components/ContactForm.vue'));

Vue.component('projects-table', require('./components/ProjectsTable.vue'));
Vue.component('languages-table', require('./components/LanguagesTable.vue'));

Vue.component('repository-table', require('./components/RepositoryTable.vue'));

Vue.component('particles-view', require('./elements/particles.vue'));


const app = new Vue({
    el: '#app'
});
