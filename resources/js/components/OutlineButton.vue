<template>
    <button
        :type="type"
        :class="classes"
        @click="onClick"
        :disabled:="disabled"
        class="bg-transparent hover:bg-teal text-teal-dark font-semibold py-2 px-4 border border-teal hover:border-transparent rounded">
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
