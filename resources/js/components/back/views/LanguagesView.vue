<template>
    <div>
        <layout
            title="Langauges">
            <span slot="buttons">
                <outline-button
                    @click="createModal.show = true">
                    Add a Language
                </outline-button>
            </span>
            <div slot="content">
                <data-table
                    ref="languageTable"
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
        </layout>

        <languages-create-modal
            @created="languageCreated"
            :show="createModal.show"
            @close="createModal.show = false">
        </languages-create-modal>
    </div>
</template>

<script>
    import TableClasses from '../../../mixins/DataTableClasses';
    import DataTableButtonCell from '../../generic/DataTableButtonCell';
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
                    { 
                        classes: {
                            'back-outline-btn': true
                        },
                        width: 25,
                        name: 'View',
                        component: DataTableButtonCell,
                        click: this.viewLanguage,
                    },
                ],
            };
        },
        mixins: [
            TableClasses
        ],
        created() {
            axios.get(`/api/languages`)
            .then(response => {
                this.languages = response.data;
            })
            .catch(function (error) {

            });
        },
        methods: {
            viewLanguage(data) {
                this.$router.push({ path: `/back/languages/${data.id}`})
            },
            updateUrl(url) {
                this.url = url;
            },
            languageCreated() {
                this.$refs.languageTable.getData();
            }
        }
    }
</script>
