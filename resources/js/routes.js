export default [
    {
        path: '/',
        component: require('./front/views/HomeView.vue').default
    },
    {
        path: '/post/:id',
        component: require('./front/views/PostView.vue').default
    },
    {
        path: '/privacy',
        component: require('./front/views/PrivacyPolicyView.vue').default
    },
    {
        path: '/login',
        component: require('./front/views/LoginView.vue').default
    },
    {
        path: '/back',
        component: require('./back/views/PortalView.vue').default
    },
    {
        path: '/back/projects',
        component: require('./back/views/ProjectsView.vue').default
    },
    {
        path: '/back/blog',
        component: require('./back/blog/Index.vue').default
    },
    {
        path: '/back/contact',
        component: require('./back/views/ContactView.vue').default
    },
    {
        path: '/back/languages',
        component: require('./back/views/LanguagesView.vue').default
    },
    {
        path: '/back/languages/:id',
        component: require('./back/views/LanguageView.vue').default
    },
    { 
        path: "*", 
        component: require('./front/views/PageNotFoundView.vue').default
    }
];
