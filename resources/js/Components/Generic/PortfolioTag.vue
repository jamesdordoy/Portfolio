<script lang="ts" setup>
import BaseTag from '@/Components/Base/BaseTag.vue';
import { usePortfolioStore } from '@/Stores/index';

const portfolioStore = usePortfolioStore();

withDefaults(
    defineProps<{
        name?: string;
    }>(),
    {
        name: 'tag',
    }
);
</script>

<template>
    <BaseTag
        :name="name"
        :class="`text-${portfolioStore.primaryThemeTextColour}`"
        class="tag"
    />
</template>
