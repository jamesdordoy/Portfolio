<template>
    <button
        :type="type"
        :class="classes"
        @click="onClick"
        :disabled:="disabled"
        class="jd-outline-button hover:bg-teal-500 hover:border-transparent">
        <slot></slot><span v-if='hasSlot'>&nbsp;</span>{{ title }}
    </button>
</template>

<script>

export default {
    data() {
        return {

        }
    },
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
        }
    },
    methods: {
        onClick() {
            this.$emit("click");
        },
    },
    computed: {
        hasSlot() {
            return !! this.$slots.default;
        }
    }
}

</script>
