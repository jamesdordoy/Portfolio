<template>
    <app-layout title="Tags">
        <template #header>
            <div class="flex justify-between">
                <h2 class="text-xl font-semibold leading-tight text-gray-800">Create a new Tag</h2>
                <JetstreamButton :href="route('tags')"> Back </JetstreamButton>
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
import Welcome from '@/Jetstream/Welcome.vue'
import JetstreamButton from '@/Jetstream/Button.vue'
import JetstreamDangerButton from '@/Jetstream/DangerButton.vue'

export default defineComponent({
    components: {
        AppLayout,
        Welcome,
        JetstreamButton,
        JetstreamDangerButton,
    },
    props: {
        tags: Object,
    },
})
</script>
