export default [
    {
        path: '/',
        component: require('./views/HomeView.vue').default,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: require('./views/Login.vue').default,
        meta: {
            requiresGuest: true
        }
    },
];
