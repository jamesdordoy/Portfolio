<template>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 cursor-pointer hover:bg-grey-light mt-2">
        #{{ name }}
    </span>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'tag',
        }
    }
}
</script>

<style>

</style>
