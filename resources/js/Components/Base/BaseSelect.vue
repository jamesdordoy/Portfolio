<template>
    <select
        :id="id"
        :selected="value"
        class="mt-1.5 w-full text-left"
        :placeholder="placeholder"
        @input="onInput"
    >
        <option
            v-for="(option, index) in options"
            :key="`tom_select_option_${index}`"
            :value="option.value"
        >
            {{ option[label] }}
        </option>
    </select>
</template>

<script>
import _ from 'lodash';
import TomSelect from 'tom-select/dist/js/tom-select.complete.min';

export default {
    name: 'TomSelect',
    props: {
        options: {
            type: Array,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        value: {
            default: null,
        },
        placeholder: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: 'name',
        },
    },
    data() {
        return {
            instance: null,
        };
    },
    watch: {
        value: {
            handler(newVal) {
                if (!_.isNull(this.value)) {
                    this.instance.setValue(newVal);
                }
            },
        },
    },
    mounted() {
        if (_.isNull(this.instance)) {
            this.instance = new TomSelect(`#${this.id}`, this.options);
        }

        if (!_.isNull(this.value)) {
            this.instance.setValue(this.value);
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
        },
    },
};
</script>

<style scoped></style>
