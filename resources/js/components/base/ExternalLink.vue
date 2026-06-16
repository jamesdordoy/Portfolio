<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
defineProps<{ href: string }>();
</script>

<template>
    <a v-bind="$attrs" :href="href" target="_blank" rel="noreferrer">
        <slot />
    </a>
</template>
