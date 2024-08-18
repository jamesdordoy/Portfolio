<script lang="ts" setup>
import colours from 'tailwindcss/colors';
import { ref, computed, watch } from 'vue';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();

let renderIndex = ref(0);

watch(
    () => portfolioStore.primaryTheme,
    function () {
        renderIndex.value = renderIndex.value + 1;
    }
);

watch(
    () => portfolioStore.primaryThemeColour,
    function () {
        renderIndex.value = renderIndex.value + 1;
    }
);

const backgroundColour = computed<string>(() => {
    const themeColour = portfolioStore.primaryThemeBgParticlesColour;
    const themeShade = portfolioStore.primaryThemeBgParticlesColourShade;

    return colours[themeColour][themeShade];
});

const particleColour = computed<string>(() => {
    const themeColour = portfolioStore.primaryThemeColour;
    const themeShade = portfolioStore.primaryThemeColourShade;
    return colours[themeColour][themeShade];
});
</script>

<template>
    <vue-particles
        id="portfolio-particles"
        :key="renderIndex"
        
        :options="{
            background: {
                color: {
                    value: backgroundColour,
                },
            },
            fullScreen: {
                enable: false,
                zIndex: 0,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: particleColour,
                },
                links: {
                    color: particleColour,
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
        }"
    />
</template>
