<script lang="ts" setup>
import { useStore } from 'vuex';
import { PropType } from 'vue';
import { notify } from 'notiwind';
import { ref, computed, onUnmounted, isProxy, toRaw } from 'vue';
import { router } from '@inertiajs/vue3';
import Footer from '@/components/generic/Footer.vue';
import Particles from '@/components/generic/Particles.vue';
import AboutMe from '@/components/sections/AboutMeSection.vue';
import Settings from '@/components/generic/Settings.vue';
import Navigation from '@/components/generic/NavigationMenu.vue';
import ToastSection from '@/components/sections/ToastSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactMeSection from '@/components/sections/ContactMeSection.vue';
import GamesSection from '@/components/sections/GamesSection.vue';
import MyExperianceSection from '@/components/sections/MyExperianceSection.vue';

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

const store = useStore();
const displaySettings = ref<boolean>(false);

const primaryThemeBg = computed<string>(() => store.getters.primaryThemeBg);

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
        :class="`bg-${primaryThemeBg} border-${store.getters.primaryThemeColour}-${
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

    <Particles />

    <div class="items-top relative min-h-screen flex-auto sm:pt-0">
        <div class="py-18 relative min-h-screen w-full px-10">
            <Particles />

            <div class="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:w-1/3">
                <div
                    class="front-into w-full md:mx-0 md:p-8"
                    :class="`border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                >
                    <h1 class="varela text-2xl sm:text-3xl md:text-4xl">James Dordoy</h1>
                    <h2 class="varela sm:text-1xl text-lg md:text-2xl">Full Stack Developer</h2>
                    <p class="varela md:text-1xl sm:text-1xl">From Essex</p>
                </div>
            </div>
        </div>

        <div
            class="w-full px-10 py-24"
            :class="`bg-${store.getters.primaryThemeBgDarker}`"
        >
            <AboutMe />
        </div>

        <div
            class="w-full px-10 py-12"
            :class="`bg-${store.getters.primaryThemeBg}`"
        >
            <ProjectsSection :projects="projects" />
        </div>

        <div
            class="w-full px-10 py-12"
            :class="`bg-${store.getters.primaryThemeBgDarker}`"
        >
            <MyExperianceSection :timeline="timeline" />
        </div>

        <div
            class="flex w-full flex-wrap px-10 py-12"
            :class="`bg-${store.getters.primaryThemeBg}`"
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
