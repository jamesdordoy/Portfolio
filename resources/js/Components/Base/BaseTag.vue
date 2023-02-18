<template>
    <span> #{{ name }} </span>
</template>

<script lang="ts" setup>
defineProps({
    name: {
        type: String,
        default: '',
    },
});
</script>
