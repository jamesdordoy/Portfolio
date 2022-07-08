<template>
    <app-layout title="Tags">
        <template #header >
            
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Create a new Tag
                </h2>
                <JetstreamButton :href="route('tags')">
                    Back
                </JetstreamButton>
            </div>
            
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-xl">
                    
                    
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
    import { InteractsWithQueryBuilder, Tailwind2 } from '@protonemedia/inertiajs-tables-laravel-query-builder';


    export default defineComponent({
        components: {
            AppLayout,
            Welcome,
            JetstreamButton,
            JetstreamDangerButton
        },
        props: {
            tags: Object
        }

    })
</script>
