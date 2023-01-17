<template>
    <app-layout title="Tags">
        <template #header>
            <div class="flex justify-between">
                <h2 class="text-xl font-semibold leading-tight text-gray-800">Add a new Language</h2>
                <JetstreamButton :href="route('languages')"> Back </JetstreamButton>
            </div>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <CreateLanguageForm> </CreateLanguageForm>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import JetstreamButton from '@/Jetstream/Button.vue'
import CreateLanguageForm from '@/Pages/Languages/Partials/CreateLanguageForm.vue'

export default defineComponent({
    components: {
        AppLayout,
        JetstreamButton,
        CreateLanguageForm,
    },
    props: {
        tags: Object,
    },
})
</script>
