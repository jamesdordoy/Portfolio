<template>
    <span class="jd-tag hover:bg-gray-200"> #{{ name }} </span>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'tag',
        },
    },
};
</script>
