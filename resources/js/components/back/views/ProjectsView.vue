<template>
    <div class="pb-4" style="background: #5e717d;">
        <back-nav>
        </back-nav>
        <div class="container mx-auto">
            <data-table
                :classes="classes"
                :url="url"
                :per-page="perPage"
                :columns="columns">
                <span slot="filters" slot-scope="{ tableData, perPage }">
                    <data-table-filters
                        :classes="classes"
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
                url: '/api/projects',
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
        mixins: [
            TableClasses
        ],
        // components: { DataTableAnchorCell, DataTableButtonCell },
        methods: {
            alertHi() {
                alert("hi")
            },
            updateUrl(url) {
                this.url = url;
            }
        }
    }
</script>
