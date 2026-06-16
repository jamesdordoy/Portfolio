<script lang="ts" setup>
defineProps<{ icon: string; text: string }>();
</script>

<template>
    <div>{{ icon }} {{ text }}</div>
</template>
