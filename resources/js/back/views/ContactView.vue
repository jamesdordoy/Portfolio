
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
            <tailwind-data-table
                :url="url"
                :columns="columns"
                @urlUpdated="updateUrl">
            </tailwind-data-table>
        </div>
    </layout>
</template>

<script>

    import TableClasses from '../../mixins/DataTableClasses';
    import TailwindDataTable from '../../components/TailwindDataTable';

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
        components: {
            TailwindDataTable
        },
        mixins: [
            TableClasses
        ],
        methods: {
            updateUrl(url) {
                this.url = url;
            }
        }
    }
</script>
