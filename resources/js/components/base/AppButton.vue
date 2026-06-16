<script lang="ts" setup>
withDefaults(
    defineProps<{
        variant?: 'primary' | 'secondary';
        size?: 'default' | 'compact';
        href?: string;
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
    }>(),
    {
        variant: 'primary',
        size: 'default',
        href: undefined,
        type: 'button',
        disabled: false,
    }
);
</script>

<template>
    <component
        :is="href ? 'a' : 'button'"
        :href="href"
        :type="href ? undefined : type"
        :disabled="href ? undefined : disabled"
        :class="[
            'inline-flex cursor-pointer items-center gap-2 rounded-lg text-sm font-semibold transition-colors',
            size === 'compact' ? 'px-3 py-2' : 'px-5 py-2.5',
            variant === 'primary'
                ? 'bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-60 dark:bg-cyan-500 dark:hover:bg-cyan-400'
                : 'border border-gray-300 bg-white text-slate-700 hover:border-gray-400 hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800',
        ]"
    >
        <slot />
    </component>
</template>
