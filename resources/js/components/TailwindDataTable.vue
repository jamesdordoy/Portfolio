<template>
    <data-table
        :url="url"
        framework="tailwind"
        ref="languageTable"
        :columns="columns">
    </data-table>
</template>

<script>
export default {
    props: {
        url: {

        },
        columns: {

        },
    },
}
</script>