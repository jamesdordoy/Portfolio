<template>
    <app-layout title="Tags">
        <template #header >
            
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Tags
                </h2>
                <JetstreamButton :href="route('tags.create')">
                    Create new Tag
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
                        :meta="tags"
                    >
                        <template #head>
                            <tr>
                                <th @click.prevent="sortBy('id')">ID</th>
                                <th @click.prevent="sortBy('name')">Name</th>
                                <th>For</th>
                                <th></th>
                            </tr>
                        </template>

                        <template #body>
                            <tr v-for="tag in tags.data" :key="tag.id">
                                <td>{{ tag.id }}</td>
                                <td>{{ tag.taggable.name }}</td>
                                <td>{{ tag.taggable_type }}</td>
                                <td class="flex justify-end">
                                    <JetstreamButton classes="mr-2">
                                        Edit
                                    </JetstreamButton>
                                    <JetstreamDangerButton>Delete</JetstreamDangerButton>
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
            tags: Object
        }

    })
</script>
