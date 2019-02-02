<template>
    <button
        @click="onClick"
        :class="classes"
        class="">
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
