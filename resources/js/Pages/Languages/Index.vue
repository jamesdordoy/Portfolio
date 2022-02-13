<template>
    <app-layout title="Languages">
        <template #header >
            
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Languages
                </h2>
                <JetstreamButton :href="route('languages.create')">
                    Create new Language
                </JetstreamButton>
            </div>
            
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-xl">
                    
                    <Table
                        :filters="queryBuilderProps.filters"
                        :search="queryBuilderProps.search"
                        :columns="queryBuilderProps.columns"
                        :on-update="setQueryBuilder"
                        :meta="languages"
                    >
                        <template #head>
                            <tr>
                                <th @click.prevent="sortBy('id')">ID</th>
                                <th @click.prevent="sortBy('name')">Name</th>
                                <th @click.prevent="sortBy('description')">Description</th>
                                <th></th>
                            </tr>
                        </template>

                        <template #body>
                            <tr v-for="language in languages.data" :key="language.id">
                                <td>{{ language.id }}</td>
                                <td>{{ language.name }}</td>
                                <td>{{ language.description }}</td>
                                <td class="flex justify-end">
                                    <JetstreamButton classes="mr-2">
                                        Edit
                                    </JetstreamButton>
                                    <JetstreamDangerButton @click="deleteLanguage(language.id)">
                                        Delete
                                    </JetstreamDangerButton>
                                </td>
                            </tr>
                        </template>
                    </Table>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Welcome from '@/Jetstream/Welcome.vue'
    import JetstreamButton from '@/Jetstream/Button'
    import JetstreamDangerButton from '@/Jetstream/DangerButton'
    import { InteractsWithQueryBuilder, Tailwind2 } from '@protonemedia/inertiajs-tables-laravel-query-builder';
    import { Inertia } from '@inertiajs/inertia'


    export default defineComponent({
        components: {
            AppLayout,
            Welcome,
            Table: Tailwind2.Table,
            JetstreamButton,
            JetstreamDangerButton
        },
        mixins: [InteractsWithQueryBuilder],
        props: {
            languages: Object
        },
        data() {
            return {
                selectedLanguage: {},
            }
        },
        methods: {
            deleteLanguage(id) {
                let thing = Inertia.delete(this.route('languages.delete', id))

                console.log(thing)
            }
        }

    })
</script>
