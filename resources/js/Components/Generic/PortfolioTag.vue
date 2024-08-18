<script lang="ts" setup>
import BaseTag from '@/Components/Base/BaseTag.vue';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();

defineProps({
    name: {
        type: String,
        default: 'tag',
    },
});
</script>

<template>
    <BaseTag
        :name="name"
        :class="`text-${portfolioStore.primaryThemeTextColour}`"
        class="tag"
    />
</template>
