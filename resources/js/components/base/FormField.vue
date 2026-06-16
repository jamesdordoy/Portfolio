<script lang="ts" setup>
import BaseFormInputError from '@/components/base/BaseFormInputError.vue';

interface FormLike {
    invalid: (_field: string) => boolean;
    errors: Record<string, string | undefined>;
}

defineProps<{
    label: string;
    fieldId: string;
    name: string;
    form: FormLike;
}>();
</script>

<template>
    <div>
        <label
            :for="fieldId"
            class="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400"
        >
            {{ label }}
        </label>
        <slot />
        <BaseFormInputError
            :name="name"
            :form="form"
            class="mt-1 text-xs text-red-500"
        />
    </div>
</template>
