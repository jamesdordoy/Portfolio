<template>
<div>
    <layout
        title="Dashboard">
        <div slot="buttons" class="flex">
            <div class="w-full">
                <outline-button
                    title="Add Language"
                    classes="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                </outline-button>
            </div>
        </div>
        <div slot="content" class="flex">
            <div class="w-1/2">
                <!-- <data-table
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
                </data-table> -->
            </div>

            <div class="w-1/2 ml-4">
                <!-- <data-table
                    url="/api/languages"
                    :classes="classes"
                    :per-page="perPage"
                    :columns="languageColumns">
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
                </data-table> -->
            </div>
            
        </div>
    </layout>
</div>
</template>

<script>
import TableClasses from '../../mixins/DataTableClasses';

export default {
    data() {
        return {
            url: '/api/projects',
            perPage: ['5', '10', '20'],
            columns: [
                { label: 'ID', name: 'id' },
                { label: 'Name', name: 'name' },
                { label: 'Owner', name: 'owner' },
                { label: 'Complete', name: 'completed' },
                { label: 'Private', name: 'private' },
            ],
            languageColumns: [
                {
                        label: 'ID',
                        name: 'id',
                        filterable: true,
                        width: 25,
                    },
                    {   
                        label: 'Name',
                        name: 'name',
                        filterable: true,
                        width: 25,
                    },
                    {   
                        label: 'Description',
                        name: 'description',
                        filterable: true,
                        width: 25,
                    },
            ],  
            exampleModalShowing: false,
            item: {},
            items: [
                {
                    id: 1,
                    name: "James",
                },
                {
                    id: 2,
                    name: "Anthony",
                },
                {
                    id: 3,
                    name: "Terry",
                },
            ]
        }
    },
    mixins: [
        TableClasses
    ],
    methods: {
        selectChange(item) {
            console.log(item);
        }
    },
}
</script>

<style>

</style>
