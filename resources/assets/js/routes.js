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
        path: '/back/github',
        component: require('./components/back/views/GitHubView.vue')
    },
];
