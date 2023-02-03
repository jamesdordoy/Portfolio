<template>
    <span class="jd-tag mr-2 rounded border border-blue-500 py-1 px-2 text-white"> #{{ name }} </span>
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
