<script lang="ts" setup>
import { ref } from 'vue';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();

let value = ref(portfolioStore.primaryThemeColourShade);

const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;

    value.value = target.value;
};
</script>

<template>
    <input
        :value="value"
        :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
        class="h-3 w-full appearance-none overflow-hidden rounded-lg outline-none"
        type="range"
        min="100"
        max="900"
        step="100"
        @input="onInput"
    />
</template>
