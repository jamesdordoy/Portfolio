<script lang="ts" setup>
import { PropType } from 'vue';
import { ref } from 'vue';
import Footer from '@/Components/Generic/Footer.vue';
import RetroBackground from '@/Components/Generic/RetroBackground.vue';
import AboutMe from '@/Components/Sections/AboutMeSection.vue';
import Settings from '@/Components/Generic/Settings.vue';
import Navigation from '@/Components/Generic/NavigationMenu.vue';
import ProjectsSection from '@/Components/Sections/ProjectsSection.vue';
import ContactMeSection from '@/Components/Sections/ContactMeSection.vue';
import GamesSection from '@/Components/Sections/GamesSection.vue';
import MyExperianceSection from '@/Components/Sections/MyExperianceSection.vue';
import { usePortfolioStore } from '@/Stores/index';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const portfolioStore = usePortfolioStore();

const props = defineProps({
    homePage: {
        type: Object as PropType<App.Dto.Pages.HomePage>,
        required: true,
    },
    errors: {
        type: Object,
        default: () => ({}),
    },
});

console.log(props.homePage);

const displaySettings = ref<boolean>(false);

const showSettings = () => {
    displaySettings.value = true;
};
const closeSettings = () => {
    displaySettings.value = false;
};
</script>

<template>
    <div>
        <Navigation />

        <div
            id="settings-sidebar"
            :class="`bg-${portfolioStore.primaryThemeBg} border-${portfolioStore.primaryThemeColour}-${
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
                <font-awesome-icon :icon="faCog" />
            </button>
        </div>

        <div class="items-top relative min-h-screen flex-auto sm:pt-0">
            <div class="py-18 relative min-h-screen w-full">
                <RetroBackground />

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
                <ProjectsSection :projects="homePage.projects" />
            </div>

            <div
                class="w-full px-10 py-12"
                :class="`bg-${portfolioStore.primaryThemeBgDarker}`"
            >
                <MyExperianceSection :timeline="homePage.timeline" />
            </div>

            <div
                class="flex w-full flex-wrap px-10 py-12"
                :class="`bg-${portfolioStore.primaryThemeBg}`"
            >
                <div class="w-full lg:w-1/2">
                    <ContactMeSection />
                </div>
                <div class="w-full lg:w-1/2">
                    <GamesSection :game-clips="homePage.gameClips" />
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>
