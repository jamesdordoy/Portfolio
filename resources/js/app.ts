import '../css/app.css'
import state from '@/State/state.js'
import getters from '@/State/getters.js'
import { createApp, h } from 'vue'
import { createStore } from 'vuex'
import Particles from 'particles.vue3'
import VueScrollTo from 'vue-scrollto'
import mutations from '@/State/mutations.js'
import fontAwesomeLibrary from '@/Loaders/font-awesome.js'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const store = createStore({
    state() {
        return state
    },
    mutations,
    getters,
})

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

createInertiaApp({
    progress: {
        color: '#4B5563',
    },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')).then((page) => page),
    async setup({ el, App, props, plugin }) {
        await fontAwesomeLibrary()

        const vue = createApp({ render: () => h(App, props) })
            .use(store)
            .use(plugin)
            .use(Particles)
            .use(VueScrollTo)
            .mixin({ methods: { route } })
            .component('font-awesome-icon', FontAwesomeIcon)
            .mount(el)

        return vue
    },
})
