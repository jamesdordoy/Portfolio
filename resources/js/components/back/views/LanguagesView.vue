<template>
    <div>
        <layout
            title="Languages">
            <span slot="buttons">
                <outline-button
                    title="Add a Language"
                    @click="createModal.show = true">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </outline-button>
            </span>
            <div slot="content">
                <data-table
                    ref="languageTable"
                    url="/api/languages"
                    :add-filters-to-url="true"
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
            @submit="languageModalSubmit"
            :show="createModal.show"
            @close="createModal.show = false">
        </languages-create-modal>
    </div>
</template>

<script>

    import TableClasses from '../../../mixins/DataTableClasses';
    import LanguageService from '../../../services/LanguageService';
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
                        event: 'click',
                        handler: this.viewLanguage,
                    },
                ],
            };
        },
        mixins: [
            TableClasses
        ],
        created() {
            LanguageService.all()
            .then(response => {
                this.languages = response.data;
            }).catch(this.displayError);
        },
        methods: {
            updateUrl(url) {
                this.url = url;
            },
            viewLanguage(data) {
                this.$router.push({ path: `/back/languages/${data.id}`})
            },
            languageModalSubmit(payload, callback) {
                LanguageService.create(payload)
                .then(response => {
                    this.$swal("Language Created");
                    this.$refs.languageTable.getData();
                    
                    if (!! callback) {
                        callback();
                    }
                    
                }).catch(this.displayError);
            },
            displayError(error) {
                alert(error.response.data.message);
            }
        }
    }
</script>
