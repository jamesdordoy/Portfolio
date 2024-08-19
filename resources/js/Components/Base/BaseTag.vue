<script lang="ts" setup>
defineProps({
    name: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <span> #{{ name }} </span>
</template>
