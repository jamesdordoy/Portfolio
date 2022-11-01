<template>
    <Head title="Home" />

    <Navigation />

    <div
        id="settings-sidebar"
        class="absolute py-2 min-h-full shadow border-r border-t w-1/4"
        :class="`bg-${$store.getters.primaryThemeBg} border-${
            $store.getters.primaryThemeColour
        }-${$store.getters.primaryThemeColourShade} ${
            displaySettings ? '' : 'hidden'
        }`"
    >
        <transition
            mode="out-in"
            :enter-active-class="`animated ${$store.getters.primaryThemeRouterAnimation}`"
        >
            <Settings @toggle="closeSettings"></Settings>
        </transition>
    </div>

    <div class="themeSettingsPanelToggleButton">
        <button
            aria-label="settings"
            class="rounded-r p-2 text-lg text-white"
            :class="`bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
            @click="showSettings"
        >
            <font-awesome-icon icon="cog" />
        </button>
    </div>

    <div class="relative flex-auto items-top min-h-screen sm:pt-0">
        <div class="w-full px-10 py-12 relative" :class="``">
            <Particles> </Particles>
        </div>

        <div class="w-full px-10 py-12" :class="`bg-secondary`">
            <AboutMe />
        </div>

        <div class="w-full px-10 py-12">
            <ProjectsSection :projects="projects" />
        </div>

        <div class="w-full px-10 py-12">
            <MyExperianceSection :timeline="timeline" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import Particles from '@/Pages/Home/Partials/HomeParticles.vue';
import AboutMe from '@/Pages/Home/Partials/AboutMe.vue';
import Settings from '@/Pages/Home/Partials/Settings.vue';
import ProjectsSection from '@/Pages/Home/Sections/ProjectsSection.vue';
import MyExperianceSection from '@/Pages/Home/Sections/MyExperianceSection.vue';
import Navigation from '@/Pages/Home/Partials/NavigationMenu.vue';

export default defineComponent({
    components: {
        Head,
        Link,
        AboutMe,
        Particles,
        Settings,
        Navigation,
        ProjectsSection,
        MyExperianceSection,
    },

    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
        projects: {
            type: Array,
            default: () => [],
        },
        timeline: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            displaySettings: false,
        };
    },
    computed: {
        primaryThemeBg() {
            return this.$store.getters.primaryThemeBg;
        },
    },
    methods: {
        showSettings() {
            this.displaySettings = true;
        },
        closeSettings() {
            this.displaySettings = false;
        },
    },
});
</script>

<style scoped>
.bg-gray-100 {
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}

.border-gray-200 {
    border-color: #edf2f7;
    border-color: rgba(237, 242, 247, var(--tw-border-opacity));
}

.text-gray-400 {
    color: #cbd5e0;
    color: rgba(203, 213, 224, var(--tw-text-opacity));
}

.text-gray-500 {
    color: #a0aec0;
    color: rgba(160, 174, 192, var(--tw-text-opacity));
}

.text-gray-600 {
    color: #718096;
    color: rgba(113, 128, 150, var(--tw-text-opacity));
}

.text-gray-700 {
    color: #4a5568;
    color: rgba(74, 85, 104, var(--tw-text-opacity));
}

.text-gray-900 {
    color: #1a202c;
    color: rgba(26, 32, 44, var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-gray-800 {
        background-color: #2d3748;
        background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
    }

    .dark\:bg-gray-900 {
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
    }

    .dark\:border-gray-700 {
        border-color: #4a5568;
        border-color: rgba(74, 85, 104, var(--tw-border-opacity));
    }

    .dark\:text-white {
        color: #fff;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .dark\:text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }
}
</style>
