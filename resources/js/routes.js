import HomeView from './front/views/HomeView.vue';
import PostView from './front/views/PostView.vue';
import PrivacyPolicyView from './front/views/PrivacyPolicyView.vue';
import LoginView from './front/views/LoginView.vue';
import PortalView from './back/views/PortalView.vue';
import ProjectsView from './back/views/ProjectsView.vue';
import BlogIndex from './back/blog/Index.vue';
import ContactView from './back/views/ContactView.vue';
import LanguagesView from './back/views/LanguagesView.vue';
import LanguageView from './back/views/LanguageView.vue';
import PageNotFoundView from './front/views/PageNotFoundView.vue';

export default [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/post/:id',
        component: PostView
    },
    {
        path: '/privacy',
        component: PrivacyPolicyView
    },
    {
        path: '/login',
        component: LoginView
    },
    {
        path: '/back',
        component: PortalView
    },
    {
        path: '/back/projects',
        component: ProjectsView
    },
    {
        path: '/back/blog',
        component: BlogIndex
    },
    {
        path: '/back/contact',
        component: ContactView
    },
    {
        path: '/back/languages',
        component: LanguagesView
    },
    {
        path: '/back/languages/:id',
        component: LanguageView
    },
    { 
        path: "*", 
        component: PageNotFoundView
    }
];
