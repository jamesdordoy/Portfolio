<script lang="ts" setup>
interface FormLike {
    invalid: (_field: string) => boolean;
    errors: Record<string, string | undefined>;
}

defineProps<{
    name: string;
    form: FormLike;
}>();
</script>

<template>
    <div v-if="form.invalid(name)">
        {{ form.errors[name] }}
    </div>
</template>
