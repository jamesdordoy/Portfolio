<script lang="ts" setup>
withDefaults(
    defineProps<{
        classes?: string;
        placeholder?: string;
        type?: string;
        value?: string;
        name?: string;
        disabled?: boolean;
        min?: number;
        max?: number;
        step?: number;
    }>(),
    {
        classes: '',
        placeholder: '',
        type: '',
        value: '',
        name: '',
        disabled: false,
        min: 0,
        max: 0,
        step: 1,
    }
);

const emit = defineEmits<{
    input: [value: string];
}>();

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
