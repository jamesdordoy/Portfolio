<template>
    <layout
        title="Projects">

        <span slot="buttons">
            <outline-button
                @click="exampleModalShowing = true">
                Show Modal
            </outline-button>
        </span>

        <div slot="content">
            <data-table
                url="/api/projects"
                :classes="classes"
                ref="languageTable"
                :add-filters-to-url="true"
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
    </layout>  
</template>

<script>

    import TableClasses from '../../mixins/DataTableClasses';

    export default {
        data() {
            return {
                url: '',
                perPage: ['10', '50', '100'],
                columns: [
                    { label: 'ID', name: 'id' },
                    { label: 'Name', name: 'name' },
                    { label: 'Owner', name: 'owner' },
                    { label: 'Complete', name: 'completed' },
                    { label: 'Private', name: 'private' },
                ]
            }
        },
        mixins: [
            TableClasses
        ],
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
