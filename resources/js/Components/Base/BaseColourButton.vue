<script lang="ts" setup>
withDefaults(
    defineProps<{
        colour?: string;
    }>(),
    {
        colour: 'blue',
    }
);
</script>

<template>
    <button :class="`p-5 bg-${colour}-500 rounded-sm`"></button>
</template>
