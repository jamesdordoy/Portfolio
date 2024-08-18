<script lang="ts" setup>
import { ref, watch } from 'vue';
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
</script>

<template>
    <vue-particles
        id="portfolio-particles"
        :key="renderIndex"
        :options="portfolioStore.getParticleOptions"
    />
</template>
