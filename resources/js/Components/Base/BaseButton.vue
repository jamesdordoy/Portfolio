<script lang="ts" setup>
import { computed } from 'vue';
import { cva } from 'class-variance-authority';

const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    variant: {
        type: String,
        default: 'default',
        validator(value: string) {
            return ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'].includes(value);
        },
    },
});

const emit = defineEmits(['click']);

const variantClasses = computed(() => {
    return cva('btn w-full font-medium disabled:pointer-events-none disabled:select-none disabled:opacity-60', {
        variants: {
            variant: {
                primary:
                    'bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90',
                secondary:
                    'bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90',
                info: 'bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90',
                success:
                    'bg-success text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90',
                warning:
                    'bg-warning text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90',
                error: 'bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90',
                default:
                    'bg-slate-100 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90',
            },
        },
        compoundVariants: [],
    })({
        variant: props.variant,
    });
});
</script>

<template>
    <button
        :class="variantClasses"
        @click="emit('click')"
    >
        <slot></slot>
        {{ text }}
    </button>
</template>
