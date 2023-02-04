<script lang="ts" setup>
import colours from 'tailwindcss/colors';
import { useStore } from 'vuex';
import { loadFull } from 'tsparticles';
import { ref, computed, watch } from 'vue';

const store = useStore();

const particlesInit = async (engine: any) => {
    await loadFull(engine);
};

let renderIndex = ref(0);

watch(
    () => store.getters.primaryTheme,
    function () {
        renderIndex.value = renderIndex.value + 1;
    }
);

watch(
    () => store.getters.primaryThemeColour,
    function () {
        renderIndex.value = renderIndex.value + 1;
    }
);

const backgroundColour = computed<string>(() => {
    if (store.getters.primaryTheme == 'light') {
        return colours.gray['200'];
    } else {
        return colours.gray['800'];
    }
});

const particleColour = computed<string>(() => {
    const themeColour = store.getters.primaryThemeColour;
    const themeShade = store.getters.primaryThemeColourShade;
    return colours[themeColour][themeShade];
});
</script>

<template>
    <Particles
        id="portfolio-particles"
        :key="renderIndex"
        :particles-init="particlesInit"
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

<style scoped>
#portfolio-particles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: 0;
}
</style>
