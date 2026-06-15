<script lang="ts" setup>
defineProps({
    id: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <span :id="id"></span>
</template>
