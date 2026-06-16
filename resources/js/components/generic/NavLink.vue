<script lang="ts" setup>
withDefaults(defineProps<{
    anchor: string;
    label: string;
    mobile?: boolean;
}>(), { mobile: false });
</script>

<template>
    <a
        v-scroll-to="anchor"
        :class="mobile
            ? 'cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-100 hover:text-cyan-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-cyan-400'
            : 'cursor-pointer text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400'"
    >
        {{ label }}
    </a>
</template>
