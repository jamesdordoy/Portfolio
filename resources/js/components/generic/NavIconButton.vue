<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
    <button
        v-bind="$attrs"
        class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-gray-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
    >
        <slot />
    </button>
</template>
