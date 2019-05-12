<template>
    <div class="bg-black">
        <back-nav>
        </back-nav>
        <div class="container mx-auto">
            <div class="flex flex-col pb-6 bg-black">
                <!-- <ul class="list-reset text-white hidden md:flex">
                    <li><span class="font-bold text-lg px-2">Backend</span></li>
                    <li><span class="border-l border-blue-lighter px-2 text-sm">Languages</span></li>
                    <li><span class="border-l border-blue-lighter px-2 text-sm ml-2">View</span></li>
                </ul> -->
                <div class="flex flex-col pt-4">
                    <div class="flex w-full justify-end">
                        <outline-button
                            @click="createModal.show = !createModal.show"
                            title="Add Language"
                            classes="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                        </outline-button>
                    </div>
            
                    <data-table
                        url="/api/languages"
                        :classes="classes"
                        :per-page="perPage"
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
        </div>
        <languages-create-modal
            :show="createModal.show"
            @close="createModal.show = false">
        </languages-create-modal>
    </div>
</template>

<script>
    import TableClasses from '../../../mixins/DataTableClasses';

    export default {
        data() {
            return {
                languages: [],
                createModal: {
                    show: false,
                },
                perPage: ['15', '50', '100'],
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        filterable: true,
                        width: 10,
                    },
                    {   
                        label: 'Name',
                        name: 'name',
                        filterable: true,
                        width: 10,
                    },
                    {   
                        label: 'Description',
                        name: 'description',
                        filterable: true,
                        width: 10,
                    },
                    // {label: 'Update', name: 'updated_at', component: DataTableButtonCell, click: this.alertHi }
                ],
            };
        },
        mixins: [
            TableClasses
        ],
        created() {
            axios.get('/api/languages')
            .then(response => {
                this.languages = response.data;
            })
            .catch(function (error) {

            });
        },
        methods: {
            alertHi() {
                this.createModal.show = true;
            },
            updateUrl(url) {
                this.url = url;
            }
        }
    }
</script>
