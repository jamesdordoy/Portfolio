<template>
    <app-layout title="Tags">
        <template #header >
            
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Add a new Language
                </h2>
                <JetstreamButton :href="route('languages')">
                    Back
                </JetstreamButton>
            </div>
            
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <CreateLanguageForm>
                    </CreateLanguageForm>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Welcome from '@/Jetstream/Welcome.vue'
    import JetstreamButton from '@/Jetstream/Button.vue'
    import JetstreamDangerButton from '@/Jetstream/DangerButton.vue'
    import CreateLanguageForm from '@/Pages/Languages/Partials/CreateLanguageForm.vue';

    export default defineComponent({
        components: {
            AppLayout,
            Welcome,
            JetstreamButton,
            JetstreamDangerButton,
            CreateLanguageForm
        },
        props: {
            tags: Object
        }

    })
</script>
