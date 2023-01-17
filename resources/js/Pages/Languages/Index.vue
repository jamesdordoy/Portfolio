<template>
    <app-layout title="Languages">
        <template #header>
            <div class="flex justify-between">
                <h2 class="text-xl font-semibold leading-tight text-gray-800">Languages</h2>
                <JetstreamButton :href="route('languages.create')"> Create new Language </JetstreamButton>
            </div>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-xl">
                    <Table :meta="languages">
                        <template #head>
                            <tr>
                                <th @click.prevent="sortBy('id')">ID</th>
                                <th @click.prevent="sortBy('name')">Name</th>
                                <th @click.prevent="sortBy('description')">Description</th>
                                <th></th>
                            </tr>
                        </template>

                        <template #body>
                            <tr
                                v-for="language in languages.data"
                                :key="language.id"
                            >
                                <td>{{ language.id }}</td>
                                <td>{{ language.name }}</td>
                                <td>{{ language.description }}</td>
                                <td class="flex justify-end">
                                    <JetstreamButton classes="mr-2"> Edit </JetstreamButton>
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
import { Table } from '@protonemedia/inertiajs-tables-laravel-query-builder'
import { router } from '@inertiajs/vue3'
import JetstreamButton from '@/Jetstream/Button.vue'
import JetstreamDangerButton from '@/Jetstream/DangerButton.vue'

export default defineComponent({
    components: {
        AppLayout,
        Welcome,
        Table,
        JetstreamButton,
        JetstreamDangerButton,
    },
    props: {
        languages: Object,
    },
    data() {
        return {
            selectedLanguage: {},
        }
    },
    methods: {
        deleteLanguage(id) {
            const thing = router.delete(this.route('languages.delete', id))

            console.log(thing)
        },
    },
})
</script>
