<template>
    <a @click="this.click" :href="'#'">{{ data[name] }}</a>
</template>

<script>
export default {
    props: {
        data: {},
        name: {},
        click: {}
    }
}
</script>

<style>

</style>
