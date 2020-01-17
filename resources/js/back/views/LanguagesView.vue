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
                <tailwind-data-table
                    :url="url"
                    :columns="columns"
                    @urlUpdated="updateUrl">
                </tailwind-data-table>
                
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

    import TableClasses from '../../mixins/DataTableClasses';
    import LanguageService from '../../services/LanguageService';
    import TailwindDataTable from '../../components/TailwindDataTable';
    import DataTableButtonCell from '../../components/DataTableButtonCell';
    
    export default {
        data() {
            return {
                url: "/api/languages",
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
        components: {
            TailwindDataTable
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
