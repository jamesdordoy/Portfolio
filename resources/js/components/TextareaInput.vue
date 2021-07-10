<template>
    <textarea
        :id="id"
        v-model="inputValue"
        :rows="rows"
        :placeholder="placeholder"
        class="input-generic focus:outline-none focus:bg-white"
        @input="onInput"
    >
    </textarea>
</template>

<style></style>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        rows: {
            type: [Number, String],
            default: 3,
        },
        placeholder: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            inputValue: '',
        };
    },
    watch: {
        value: {
            handler(newVal) {
                this.inputValue = newVal;
            },
        },
    },
    created() {
        this.inputValue = this.value;
    },
    methods: {
        onInput(event) {
            const { value } = event.srcElement;

            this.$emit('input', value);
        },
    },
};
</script>
