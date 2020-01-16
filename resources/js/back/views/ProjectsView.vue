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
            <tailwind-data-table
                url="/api/projects"
                :columns="columns">
            </tailwind-data-table>
        </div>
    </layout>  
</template>

<script>

    import TailwindDataTable from '../../components/TailwindDataTable';

    export default {
        components: {
            TailwindDataTable
        },
        data() {
            return {
                columns: [
                    { 
                        label: 'ID',
                        name: 'id',
                        orderable: true 
                    },
                    { 
                        label: 'Name', 
                        name: 'name', 
                        orderable: true
                    },
                    { 
                        label: 'Owner',
                        name: 'owner',
                        orderable: true
                    },
                    { 
                        label: 'Complete',
                        name: 'completed',
                        orderable: true
                    },
                    { 
                        label: 'Private',
                        name: 'private',
                        orderable: true
                    },
                ]
            }
        },
        methods: {
            updateUrl(url) {
                this.url = url;
            }
        }
    }
</script>
