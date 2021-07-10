<template>
    <data-table
        ref="languageTable"
        :url="url"
        framework="tailwind"
        :columns="columns"
    >
    </data-table>
</template>

<script>
export default {
    props: {
        url: {},
        columns: {},
    },
};
</script>
