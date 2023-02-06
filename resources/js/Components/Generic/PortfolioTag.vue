<script setup>
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
    <span
        :class="`text-${store.getters.primaryThemeTextColour}`"
        class="jd-tag mr-2 rounded border border-blue-500 py-1 px-2 text-xs"
    >
        #{{ name }}
    </span>
</template>
