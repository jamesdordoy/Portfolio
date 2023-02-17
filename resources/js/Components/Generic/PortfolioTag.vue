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
        class="mr-2 inline rounded border border-blue-500 py-1 px-2 text-xs"
    >
        #{{ name }}
    </span>
</template>
