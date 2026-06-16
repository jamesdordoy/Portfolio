<script lang="ts" setup>
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

withDefaults(
    defineProps<{
        href: string;
        label: string;
        icon: IconDefinition;
        size?: string;
    }>(),
    { size: 'text-lg' }
);
</script>

<template>
    <a
        :href="href"
        :aria-label="label"
        rel="noreferrer"
        target="_blank"
        class="text-slate-400 transition-colors hover:text-slate-700 dark:text-zinc-500 dark:hover:text-zinc-200"
    >
        <font-awesome-icon
            :icon="icon"
            :class="size"
        />
    </a>
</template>
