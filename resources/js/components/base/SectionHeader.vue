<script lang="ts" setup>
defineProps<{
    eyebrow: string;
    title: string;
}>();
</script>

<template>
    <div>
        <p class="section-heading">{{ eyebrow }}</p>
        <h2 class="section-title">{{ title }}</h2>
    </div>
</template>
