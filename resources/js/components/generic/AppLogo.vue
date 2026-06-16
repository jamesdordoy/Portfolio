<script lang="ts" setup>
withDefaults(
    defineProps<{
        showName?: boolean;
    }>(),
    { showName: true }
);
</script>

<template>
    <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-600 dark:bg-cyan-500">
            <span class="text-xs font-bold text-white">JD</span>
        </div>
        <span
            v-if="showName"
            class="font-semibold text-slate-900 dark:text-zinc-100"
            >James Dordoy</span
        >
    </div>
</template>
