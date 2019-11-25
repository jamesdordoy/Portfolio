<template>
    <button
        :type="type"
        :class="classes"
        @click="onClick"
        :disabled:="disabled"
        class="text-grey-lighter font-bold py-2 px-4 rounded text-xs bg-teal hover:bg-teal-dark">
        <slot></slot>&nbsp;{{ title }}
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
}

</script>
