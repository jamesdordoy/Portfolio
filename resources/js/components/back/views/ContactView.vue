
<template>
    <layout
        title="Contacts">
        <span slot="buttons">
            <outline-button
                @click="exampleModalShowing = true">
                Show Modal
            </outline-button>
        </span>
        <div slot="content">
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
    </layout>
</template>

<script>

    import TableClasses from '../../../mixins/DataTableClasses';

    export default {
        data() {
            return {
                url: '/api/contacts',
                perPage: ['10', '50', '100'],
                columns: [
                    {label: 'ID', name: 'id' },
                    {label: 'Name', name: 'name' },
                    {label: 'Email', name: 'email' },
                ]
            }
        },
        mixins: [
            TableClasses
        ],
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
