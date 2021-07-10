<template>
    <div class="h-full" :class="`bg-${$store.getters.primaryThemeBgParticles}`">
        <front-nav :auth="auth"> </front-nav>

        <div
            id="settings-sidebar"
            :class="`bg-${$store.getters.primaryThemeBg} border-${
                $store.getters.primaryThemeColour
            }-${$store.getters.primaryThemeColourShade} ${
                displaySettings ? '' : 'hidden'
            }`"
            class="fixed py-2 min-h-full shadow border-r border-t"
        >
            <transition
                mode="out-in"
                :enter-active-class="`animated ${$store.getters.primaryThemeRouterAnimation}`"
            >
                <theme-settings-panel @toggle="closeSettings">
                </theme-settings-panel>
            </transition>
        </div>

        <div class="themeSettingsPanelToggleButton">
            <button
                class="rounded-r p-2 text-lg text-white"
                :class="`bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                @click="showSettings"
            >
                <font-awesome-icon :icon="['fas', 'cog']" />
            </button>
        </div>

        <div id="home" class="h-full">
            <particles>
                <login-form :old-email="oldEmail"> </login-form>
            </particles>
        </div>
        <div class="w-full">
            <div
                class="w-full px-10 py-12"
                :class="`bg-${$store.getters.primaryThemeBgDarker}`"
            >
                <about-me-panel />
            </div>

            <div
                class="w-full px-10 py-12"
                :class="`bg-${$store.getters.primaryThemeBgLighter}`"
            >
                <projects-panel :projects="projects"> </projects-panel>
            </div>

            <div
                class="px-10 py-12"
                :class="`bg-${$store.getters.primaryThemeBgDarker}`"
            >
                <blog-panel :posts="posts"> </blog-panel>
            </div>
            <div
                class="flex flex-wrap px-10 py-2 content-start"
                :class="`bg-${$store.getters.primaryThemeBgLighter}`"
            >
                <div class="w-full lg:w-1/2 py-8 px-2">
                    <contact-me-panel :contact-form-url="contactFormUrl">
                    </contact-me-panel>
                </div>
                <div class="w-full lg:w-1/2 py-8 lg:pr-2 px-2">
                    <experience-timeline-panel :timeline="timeline">
                    </experience-timeline-panel>
                </div>
            </div>
            <front-footer :newsletter-form-url="newsletterFormUrl">
            </front-footer>
        </div>
    </div>
</template>

<script>
import LoginForm from '../forms/LoginForm.vue';
import FrontNav from '../includes/Nav.vue';
import FrontFooter from '../includes/Footer.vue';
import BlogPanel from '../panels/BlogPanel.vue';
import AboutMePanel from '../panels/AboutMePanel.vue';
import ProjectsPanel from '../panels/ProjectsPanel.vue';
import ContactMePanel from '../panels/ContactMePanel.vue';
import IndexService from '../../services/IndexService';
import ThemeSettingsPanel from '../panels/ThemeSettingsPanel.vue';
import ExperienceTimelinePanel from '../panels/ExperienceTimelinePanel.vue';

export default {
    components: {
        FrontNav,
        BlogPanel,
        LoginForm,
        FrontFooter,
        AboutMePanel,
        ProjectsPanel,
        ContactMePanel,
        ThemeSettingsPanel,
        ExperienceTimelinePanel,
    },
    props: {
        old: {
            type: Object,
            default: () => ({}),
        },
        auth: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            projects: [],
            posts: {},
            timeline: [],
            contactFormUrl: '/contact',
            newsletterFormUrl: '/newsletter',
            displaySettings: false,
        };
    },
    computed: {
        oldEmail() {
            return this.old.email ? this.old.email : '';
        },
    },
    created() {
        this.getLanguages();
        this.getProjects();
        this.getPosts();
        this.getTimeline();
    },
    methods: {
        getLanguages() {
            IndexService.languages()
                .then((response) => {
                    this.languages = response.data;
                })
                .catch(console.log);
        },
        getProjects() {
            IndexService.projects()
                .then((response) => {
                    this.projects = response.data;
                })
                .catch(console.log);
        },
        getPosts() {
            IndexService.posts()
                .then((response) => {
                    this.posts = response.data;
                })
                .catch(console.log);
        },
        getTimeline() {
            IndexService.timeline()
                .then((response) => {
                    this.timeline = response.data.data;
                })
                .catch(console.log);
        },
        showSettings() {
            this.displaySettings = true;
        },
        closeSettings() {
            this.displaySettings = false;
        },
    },
};
</script>
