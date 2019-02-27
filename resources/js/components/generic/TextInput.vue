<template>
    <input
        :id="id"
        type="text"
        :name="name"
        @input="onInput"
        v-model="inputValue"
        :placeholder="placeholder"
        class="input-generic focus:outline-none focus:bg-white">
</template>

<style>

</style>

<script>

export default {
    data() {
        return {
            inputValue: '',
        }
    },
    watch: {
        value: {
            handler(newVal) {
                this.inputValue = newVal;
            }
        }
    },
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
    methods: {
        onInput(event) {
            let value = event.srcElement.value;

            this.$emit("input", value);
        }
    },
    created: function() {
        this.inputValue = this.value;
    }
}

</script>
