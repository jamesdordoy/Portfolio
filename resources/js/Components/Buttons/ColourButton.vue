<template>
    <button :class="`p-5 bg-${colour}-500 rounded`"></button>
</template>

<script>
export default {
    props: {
        colour: {
            type: String,
            default: 'blue',
        },
    },
};
</script>
