<template>
    <textarea
        @input="onInput"
        v-model="inputValue"
        class="input-generic focus:outline-none focus:bg-white"
        :id="id"
        :rows="rows"
        :placeholder="placeholder">
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
