<template>
    <button
        :type="type"
        :class="classes"
        :disabled:="disabled"
        class="jd-outline-button hover:bg-teal-500 hover:border-transparent"
        @click="onClick"
    >
        <slot></slot><span v-if="hasSlot">&nbsp;</span>{{ title }}
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
    computed: {
        hasSlot() {
            return !!this.$slots.default;
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
</script>
