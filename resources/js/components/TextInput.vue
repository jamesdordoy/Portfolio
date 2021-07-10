<template>
    <input
        :id="id"
        v-model="inputValue"
        type="text"
        :name="name"
        :placeholder="placeholder"
        class="input-generic focus:outline-none focus:bg-white"
        @input="onInput"
    />
</template>

<style></style>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        name: {
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
