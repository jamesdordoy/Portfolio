<script lang="ts" setup>
withDefaults(
    defineProps<{
        name?: string;
    }>(),
    {
        name: '',
    }
);
</script>

<template>
    <span> #{{ name }} </span>
</template>
