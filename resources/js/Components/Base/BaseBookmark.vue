<script lang="ts" setup>

defineProps({
    id: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        default: 'bookmark'
    },
});

</script>

<template>
    <span :id="id" :class="class"></span>
</template>
