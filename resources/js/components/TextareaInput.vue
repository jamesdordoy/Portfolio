<template>
    <textarea
        :id="id"
        :rows="rows"
        @input="onInput"
        v-model="inputValue"
        :placeholder="placeholder"
        class="input-generic focus:outline-none focus:bg-white">
    </textarea>
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
