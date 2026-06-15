<script lang="ts" setup>
const emit = defineEmits<{
    input: [value: string];
}>();

const onInput = (event: InputEvent) => {
    emit('input', (event.target as HTMLInputElement).value);
};

withDefaults(
    defineProps<{
        rows?: number;
        placeholder?: string;
        value?: string;
        classes?: string;
    }>(),
    {
        rows: 4,
        placeholder: 'Enter Text',
        value: '',
        classes: '',
    }
);
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
