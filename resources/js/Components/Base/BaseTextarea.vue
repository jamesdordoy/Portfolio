<script lang="ts" setup>
const emit = defineEmits(['input']);

const onInput = (event: InputEvent) => {
    emit('input', (event.target as HTMLInputElement).value);
};

defineProps({
    rows: {
        type: Number,
        default: 4,
    },
    placeholder: {
        type: String,
        default: 'Enter Text',
    },
    value: {
        type: String,
        default: '',
    },
    classes: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <textarea
        :rows="rows"
        :placeholder="placeholder"
        :value="value"
        :class="classes"
        @input="onInput"
    ></textarea>
</template>
