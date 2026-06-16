<script lang="ts" setup>
defineProps<{
    id: string;
}>();
</script>

<template>
    <span :id="id"></span>
</template>
