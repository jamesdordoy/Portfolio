<script lang="ts" setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
    form: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div v-if="form.invalid(name)">
        {{ form.errors[name] }}
    </div>
</template>
