<script setup>
import BaseTag from '@/Components/Base/BaseTag.vue';
import { useStore } from 'vuex';

const store = useStore();

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
        :class="`text-${store.getters.primaryThemeTextColour}`"
        class="tag"
    />
</template>
