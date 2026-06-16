<script lang="ts" setup>
withDefaults(
    defineProps<{
        name?: string;
    }>(),
    { name: 'tag' }
);
</script>

<template>
    <span class="tag">{{ name }}</span>
</template>
