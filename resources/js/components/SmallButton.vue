<template>
    <button
        :type="type"
        :class="classes"
        :disabled:="disabled"
        class="
            text-grey-lighter
            font-bold
            py-2
            px-4
            rounded
            text-xs
            bg-teal
            hover:bg-teal-dark
        "
        @click="onClick"
    >
        <slot></slot>&nbsp;{{ title }}
    </button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'button',
        },
        classes: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
</script>
