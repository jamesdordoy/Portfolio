<script setup lang="ts">
import { useStore } from 'vuex';
import { PropType } from 'vue';
import Project from '@/Components/Generic/Project.vue';

const store = useStore();

defineProps({
    projects: {
        type: Array as PropType<Array<App.Models.Data.Project>>,
        required: true,
    },
});
</script>

<template>
    <div>
        <span
            id="projects"
            class="jd-bookmark"
        >
        </span>
        <h2
            class="varela mb-8 text-center text-3xl"
            :class="`text-${store.getters.primaryThemeTextColour}`"
        >
            Projects
        </h2>
        <section class="flex flex-wrap">
            <div
                v-for="project in projects"
                :key="project.id"
                class="mb-4 w-full px-2 md:w-1/2 lg:w-1/3"
            >
                <Project :project="project" />
            </div>
        </section>
    </div>
</template>
