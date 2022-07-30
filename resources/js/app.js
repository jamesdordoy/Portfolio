/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import '../css/app.css';
import state from '@/State/state';
import getters from '@/State/getters';
import { createApp, h } from 'vue';
import { createStore } from 'vuex';
import Particles from 'particles.vue3';
import VueScrollTo from 'vue-scrollto';
import mutations from '@/State/mutations';
import { InertiaProgress } from '@inertiajs/progress';
import fontAwesomeLibrary from '@/loaders/font-awesome';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const store = createStore({
	state() {
		return state;
	},
	mutations,
	getters,
});

const appName =
	window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.vue`,
			import.meta.glob('./Pages/**/*.vue')
		).then((page) => page),
	async setup({ el, app, props, plugin }) {
		await fontAwesomeLibrary();

		const vue = createApp({ render: () => h(app, props) })
			.use(store)
			.use(plugin)
			.use(Particles)
			.use(VueScrollTo)
			.mixin({ methods: { route } })
			.component('font-awesome-icon', FontAwesomeIcon)
			.mount(el);

		return vue;
	},
});

InertiaProgress.init({ color: '#4B5563' });
