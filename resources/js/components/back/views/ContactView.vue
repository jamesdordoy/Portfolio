<template>
    <div class="bg-black pb-4">
        <back-nav>
        </back-nav>
        <div class="container mx-auto">
            <data-table
                :url="url"
                :per-page="perPage"
                :classes="classes"
                :columns="columns">

                <span slot="filters" slot-scope="{ tableData, perPage }">
                    <data-table-filters
                        
                        :table-data="tableData"
                        :per-page="perPage">
                    </data-table-filters>
                </span>

                <span slot="pagination" slot-scope="{ links, meta }">
                    <paginator 
                        @next="updateUrl"
                        @prev="updateUrl"
                        :meta="meta"
                        :links="links">
                    </paginator>
                </span>
            </data-table>
        </div>
    </div>
</template>

<script>

    import TableClasses from '../../../mixins/DataTableClasses';
    // import DataTableButtonCell from '../../../packages/jamesdordoy/laravelvuedatatable/components/generic/DataTableButtonCell';
    // import DataTableAnchorCell from '../../../packages/jamesdordoy/laravelvuedatatable/components/generic/DataTableAnchorCell';    

    export default {
        data() {
            return {
                url: '/api/contacts',
                perPage: ['10', '50', '100'],
                columns: [
                    {label: 'ID', name: 'id' },
                    {label: 'Name', name: 'name' },
                    {label: 'Email', name: 'email' },
                    // {label: 'Update', name: 'updated_at', component: DataTableButtonCell, click: this.alertHi }
                ]
            }
        },
        mixins: [
            TableClasses
        ],
        // components: { DataTableAnchorCell, DataTableButtonCell },
        methods: {
            alertHi(item) {
                console.log(item)
            },
            updateUrl(url) {
                this.url = url;
            }
        }
    }
</script>
