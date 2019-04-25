<template>
    <div class="bg-black pb-4">
        <back-nav>
        </back-nav>
        <div class="container mx-auto">
            <data-table
                url="/api/contacts"
                :per-page="perPage"
                :columns="columns">
            </data-table>
        </div>
    </div>
</template>

<script>

    import DataTableButtonCell from '../../../packages/jamesdordoy/laravelvuedatatable/components/generic/DataTableButtonCell';
    import DataTableAnchorCell from '../../../packages/jamesdordoy/laravelvuedatatable/components/generic/DataTableAnchorCell';

    export default {
        data() {
            return {
                perPage: ['15', '50', '100'],
                columns: [
                    {label: 'ID', name: 'id' },
                    {label: 'Name', name: 'name' },
                    {label: 'Email', name: 'email' },
                    {label: 'Update', name: 'updated_at', component: DataTableButtonCell, click: this.alertHi }
                ]
            }
        },
        components: { DataTableAnchorCell, DataTableButtonCell },
        methods: {
            alertHi(item) {
                console.log(item)
            }
        }
    }
</script>
