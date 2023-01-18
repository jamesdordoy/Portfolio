<template>
    <app-layout title="Languages">
        <template #header>
            <div class="flex justify-between">
                <h2 class="text-xl font-semibold leading-tight text-gray-800">Projects</h2>
                <JetstreamButton :href="route('languages.create')"> Create new Project </JetstreamButton>
            </div>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-xl"></div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import JetstreamButton from '@/Jetstream/Button.vue'
import JetstreamDangerButton from '@/Jetstream/DangerButton.vue'

export default defineComponent({
    components: {
        AppLayout,
        JetstreamButton,
        JetstreamDangerButton,
    },
    props: {
        projects: Object,
    },
})
</script>
