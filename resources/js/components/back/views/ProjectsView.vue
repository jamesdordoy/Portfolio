<template>
    <div class="">
        <back-nav>
        </back-nav>
        <data-table
            url="/api/projects"
            :columns="columns">
        </data-table>
    </div>
</template>

<script>

    import DataTableAnchorCell from '../../generic/data-table/generic/DataTableAnchorCell';

    export default {
        data() {
            return {
                columns: [
                    {label: 'ID', name: 'id' },
                    {label: 'Name', name: 'name' },
                    {label: 'Link', name: 'link', component: DataTableAnchorCell, click: this.alertHi }
                ]
            }
        },
        components: { DataTableAnchorCell },
        methods: {
            alertHi() {
                alert("hi")
            }
        }
    }
</script>
