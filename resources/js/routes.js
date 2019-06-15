export default [
    {
        path: '/',
        component: require('./components/front/views/HomeView.vue')
    },
    {
        path: '/back',
        component: require('./components/back/views/PortalView.vue')
    },
    {
        path: '/back/projects',
        component: require('./components/back/views/ProjectsView.vue')
    },
    {
        path: '/back/contact',
        component: require('./components/back/views/ContactView.vue')
    },
    {
        path: '/back/languages',
        component: require('./components/back/views/LanguagesView.vue')
    },
];
