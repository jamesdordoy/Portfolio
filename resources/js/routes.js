export default [
    {
        path: '/',
        component: require('./front/views/HomeView.vue')
    },
    {
        path: '/login',
        component: require('./front/views/LoginView.vue')
    },
    {
        path: '/back',
        component: require('./back/views/PortalView.vue')
    },
    {
        path: '/back/projects',
        component: require('./back/views/ProjectsView.vue')
    },
    {
        path: '/back/blog',
        component: require('./back/blog/Index.vue')
    },
    {
        path: '/back/contact',
        component: require('./back/views/ContactView.vue')
    },
    {
        path: '/back/languages',
        component: require('./back/views/LanguagesView.vue')
    },
    {
        path: '/back/languages/:id',
        component: require('./back/views/LanguageView.vue')
    },
];
