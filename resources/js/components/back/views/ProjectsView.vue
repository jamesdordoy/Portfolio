<template>
    <div class="bg-black pb-4">
        <back-nav>
        </back-nav>
        <div class="container mx-auto">
            <data-table
                url="/api/projects"
                :per-page="perPage"
                :columns="columns">
            </data-table>
        </div>
        <div class="h-64">
            </div>
        
    </div>
</template>

<script>

    // import DataTableButtonCell from '../../../packages/jamesdordoy/laravelvuedatatable/components/generic/DataTableButtonCell';
    // import DataTableAnchorCell from '../../../packages/jamesdordoy/laravelvuedatatable/components/generic/DataTableAnchorCell';

    export default {
        data() {
            return {
                perPage: ['10', '50', '100'],
                columns: [
                    { label: 'ID', name: 'id' },
                    { label: 'Name', name: 'name' },
                    { label: 'Owner', name: 'owner' },
                    { label: 'Complete', name: 'completed' },
                    { label: 'Private', name: 'private' },
                    // { label: 'Link', name: 'link', component: DataTableAnchorCell, click: this.alertHi },
                    // { label: 'Update', name: 'updated_at', component: DataTableButtonCell, click: this.alertHi, 'align': 'center' }
                ]
            }
        },
        // components: { DataTableAnchorCell, DataTableButtonCell },
        methods: {
            alertHi() {
                alert("hi")
            }
        }
    }
</script>
