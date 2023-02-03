<script lang="ts" setup>
defineProps({
    classes: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: '',
    },
    value: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 0,
    },
    step: {
        type: Number,
        default: 1,
    },
});

const emit = defineEmits(['input']);

const onInput = (event: InputEvent) => {
    emit('input', (event.target as HTMLInputElement).value);
};
</script>

<template>
    <input
        :class="classes"
        :placeholder="placeholder"
        :type="type"
        :value="value"
        :name="name"
        :disabled="disabled"
        @input="onInput"
    />
</template>
