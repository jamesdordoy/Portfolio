<script lang="ts" setup>
import BaseBookmark from '@/components/base/BaseBookmark.vue';

withDefaults(
    defineProps<{
        id: string;
        shaded?: boolean;
    }>(),
    { shaded: false }
);
</script>

<template>
    <section
        :class="shaded
            ? 'border-t border-gray-100 bg-gray-50 py-24 dark:border-zinc-800/50 dark:bg-zinc-900/50'
            : 'py-24'"
    >
        <div class="mx-auto max-w-6xl px-4 lg:px-8">
            <BaseBookmark
                :id="id"
                class="jd-bookmark"
            />
            <slot />
        </div>
    </section>
</template>
