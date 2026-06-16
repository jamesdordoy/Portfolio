<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
const model = defineModel<string>();
withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' });
</script>

<template>
    <input
        v-bind="$attrs"
        v-model="model"
        :class="[
            'w-full rounded-lg border border-gray-200 bg-white text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400',
            size === 'sm' ? 'px-3 py-2' : 'px-4 py-2.5',
        ]"
    />
</template>
