<script lang="ts" setup>
import { PropType } from 'vue';
import { notify } from 'notiwind';
import { ref, computed, onUnmounted, isProxy, toRaw } from 'vue';
import { router } from '@inertiajs/vue3';
import Footer from '@/Components/Generic/Footer.vue';
import Particles from '@/Components/Generic/Particles.vue';
import AboutMe from '@/Components/Sections/AboutMeSection.vue';
import Settings from '@/Components/Generic/Settings.vue';
import Navigation from '@/Components/Generic/NavigationMenu.vue';
import ToastSection from '@/Components/Sections/ToastSection.vue';
import ProjectsSection from '@/Components/Sections/ProjectsSection.vue';
import ContactMeSection from '@/Components/Sections/ContactMeSection.vue';
import GamesSection from '@/Components/Sections/GamesSection.vue';
import MyExperianceSection from '@/Components/Sections/MyExperianceSection.vue';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();

const props = defineProps({
    projects: {
        type: Array as PropType<App.Models.Data.Collection<App.Dto.Project>>,
        required: true,
    },
    timeline: {
        type: Array as PropType<App.Models.Data.Collection<App.Dto.TimelineEvent>>,
        required: true,
    },
    gameClips: {
        type: Array as PropType<App.Models.Data.Collection<App.Dto.GameClip>>,
        required: true,
    },
    errors: {
        type: Object,
        default: () => ({}),
    },
});

const displaySettings = ref<boolean>(false);

const primaryThemeBg = computed<string>(() => portfolioStore.primaryThemeBg);

const showSettings = () => {
    displaySettings.value = true;
};
const closeSettings = () => {
    displaySettings.value = false;
};

const removeFinishEventListener = router.on('finish', () => {
    if (isProxy(props.errors)) {
        const errors = toRaw(props.errors);

        const keys = Object.keys(errors);

        keys.reverse().forEach((key) => {
            notify(
                {
                    group: 'toasts',
                    title: 'Error',
                    text: errors[key],
                    colour: 'red',
                },
                4000
            );
        });
    }
});

onUnmounted(() => {
    removeFinishEventListener();
});
</script>

<template>
    <Navigation />

    <div
        id="settings-sidebar"
        :class="`bg-${primaryThemeBg} border-${portfolioStore.primaryThemeColour}-${
            portfolioStore.primaryThemeColourShade
        } ${displaySettings ? '' : 'hidden'}`"
    >
        <transition
            mode="out-in"
            :enter-active-class="`animated ${portfolioStore.primaryThemeRouterAnimation}`"
        >
            <Settings @toggle="closeSettings"></Settings>
        </transition>
    </div>

    <div class="themeSettingsPanelToggleButton">
        <button
            aria-label="settings"
            class="rounded-r p-2 text-lg text-white"
            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
            @click="showSettings"
        >
            <font-awesome-icon icon="cog" />
        </button>
    </div>

    <Particles />

    <div class="items-top relative min-h-screen flex-auto sm:pt-0">
        <div class="py-18 relative min-h-screen w-full px-10">
            <Particles />

            <div class="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:w-1/3">
                <div
                    class="front-into w-full md:mx-0 md:p-8"
                    :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                >
                    <h1 class="varela text-2xl sm:text-3xl md:text-4xl">James Dordoy</h1>
                    <h2 class="varela sm:text-1xl text-lg md:text-2xl">Full Stack Developer</h2>
                    <p class="varela md:text-1xl sm:text-1xl">From Essex</p>
                </div>
            </div>
        </div>

        <div
            class="w-full px-10 py-24"
            :class="`bg-${portfolioStore.primaryThemeBgDarker}`"
        >
            <AboutMe />
        </div>

        <div
            class="w-full px-10 py-12"
            :class="`bg-${portfolioStore.primaryThemeBg}`"
        >
            <ProjectsSection :projects="projects" />
        </div>

        <div
            class="w-full px-10 py-12"
            :class="`bg-${portfolioStore.primaryThemeBgDarker}`"
        >
            <MyExperianceSection :timeline="timeline" />
        </div>

        <div
            class="flex w-full flex-wrap px-10 py-12"
            :class="`bg-${portfolioStore.primaryThemeBg}`"
        >
            <div class="w-full lg:w-1/2">
                <ContactMeSection />
            </div>
            <div class="w-full lg:w-1/2">
                <GamesSection :game-clips="gameClips" />
            </div>
        </div>

        <Footer />

        <ToastSection />
    </div>
</template>
