<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import TomSelect from 'tom-select';

interface SelectOption {
    value: string | number;
    [key: string]: unknown;
}

const props = withDefaults(
    defineProps<{
        options: SelectOption[];
        id: string;
        value?: string | number | null;
        placeholder?: string;
        label?: string;
    }>(),
    {
        value: null,
        placeholder: '',
        label: 'name',
    }
);

const emit = defineEmits<{
    input: [value: string];
}>();

const instance = ref<TomSelect | null>(null);

watch(
    () => props.value,
    (newVal) => {
        if (newVal !== null && newVal !== undefined && instance.value) {
            instance.value.setValue(String(newVal));
        }
    }
);

onMounted(() => {
    if (instance.value === null) {
        instance.value = new TomSelect(`#${props.id}`, {});
    }
    if (props.value !== null && props.value !== undefined && instance.value) {
        instance.value.setValue(String(props.value));
    }
});

const onInput = (e: Event) => {
    emit('input', (e.target as HTMLSelectElement).value);
};
</script>

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

<style scoped></style>
