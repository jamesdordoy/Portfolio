<script lang="ts" setup>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import { Head } from '@inertiajs/vue3';

import Particles from '@/Pages/Home/Partials/HomeParticles.vue';
import AboutMe from '@/Pages/Home/Partials/AboutMe.vue';
import Settings from '@/Pages/Home/Partials/Settings.vue';
import ProjectsSection from '@/Pages/Home/Sections/ProjectsSection.vue';
import MyExperianceSection from '@/Pages/Home/Sections/MyExperianceSection.vue';
import Navigation from '@/Pages/Home/Partials/NavigationMenu.vue';
import Footer from '@/components/Generic/Footer.vue';
import BaseButton from '@/components/Base/BaseButton.vue';
import BaseSelect from '@/components/Base/BaseSelect.vue';
import BaseTextarea from '@/components/Base/BaseTextarea.vue';

const store = useStore();
const displaySettings = ref<boolean>(false);

defineProps({
    projects: {
        type: Array,
        required: true,
    },
    timeline: {
        type: Array,
        required: true,
    },
});

computed<string>(() => store.getters.primaryThemeBg);

const showSettings = () => {
    displaySettings.value = true;
};
const closeSettings = () => {
    displaySettings.value = false;
};
</script>

<template>
    <Navigation />

    <div
        id="settings-sidebar"
        class="fixed min-h-full w-1/4 border-r border-t py-2 shadow"
        :class="`bg-${store.getters.primaryThemeBg} border-${store.getters.primaryThemeColour}-${
            store.getters.primaryThemeColourShade
        } ${displaySettings ? '' : 'hidden'}`"
    >
        <transition
            mode="out-in"
            :enter-active-class="`animated ${store.getters.primaryThemeRouterAnimation}`"
        >
            <Settings @toggle="closeSettings"></Settings>
        </transition>
    </div>

    <div class="themeSettingsPanelToggleButton">
        <button
            aria-label="settings"
            class="rounded-r p-2 text-lg text-white"
            :class="`bg-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
            @click="showSettings"
        >
            <font-awesome-icon icon="cog" />
        </button>
    </div>

    <div class="items-top relative min-h-screen flex-auto sm:pt-0">
        <!-- :class="`bg-${store.getters.primaryThemeBgLighter}`" -->
        <div class="py-18 relative min-h-screen w-full px-10">
            <Particles />

            <div class="absolute top-1/2 left-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 transform">
                <div
                    class="front-into w-full md:mx-0 md:p-8"
                    :class="`border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                >
                    <h1 class="varela sm:text-3xl md:text-4xl">James Dordoy</h1>
                    <h2 class="varela sm:text-1xl md:text-2xl">Full Stack Developer</h2>
                    <p class="varela md:text-1xl sm:text-1xl">From Essex</p>
                </div>
            </div>
        </div>

        <div
            class="w-full px-10 py-24"
            :class="`bg-${store.getters.primaryThemeBgDarkest}`"
        >
            <AboutMe />
        </div>

        <div
            class="w-full px-10 py-12"
            :class="`bg-${store.getters.primaryThemeBgLighter}`"
        >
            <ProjectsSection :projects="projects" />
        </div>

        <div
            class="w-full px-10 py-12"
            :class="`bg-${store.getters.primaryThemeBgDarkest}`"
        >
            <MyExperianceSection :timeline="timeline" />
        </div>

        <Footer />
    </div>
</template>

<style scoped></style>
