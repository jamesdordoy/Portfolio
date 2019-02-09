<template>
    <button
        @click="onClick"
        :class="classes"
        :type="type"
        class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
        {{ title }}
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
    },
    methods: {
        onClick() {
            this.$emit("click");
        }
    },
}

</script>
