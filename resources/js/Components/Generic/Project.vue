<script lang="ts" setup>
import { useStore } from 'vuex';
import { PropType } from 'vue';
import Tag from '@/Components/Generic/PortfolioTag.vue';

const store = useStore();

defineProps({
    project: {
        type: Object as PropType<App.Models.Data.Project>,
        required: true,
    },
});
</script>

<template>
    <div
        :key="project.id"
        class="project"
        :class="`bg-${store.getters.primaryThemeBgDarker} border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
    >
        <a
            :href="project.link"
            rel="noreferrer"
            target="_blank"
        >
            <img
                :alt="project.name"
                :class="`border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                class="project-image"
                :src="project.icon ? project.icon : '/images/projects/simple-shopping.png'"
            />
        </a>

        <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">
                <a
                    :href="project.link"
                    rel="noreferrer"
                    class="project-name"
                    target="_blank"
                    >{{ project.name }}</a
                >
            </div>
            <p
                class="text-base"
                :class="`text-${store.getters.primaryThemeTextColour}`"
            >
                {{ project.description }}
            </p>
        </div>
        <div class="px-6 py-4">
            <tag
                v-for="tag in project.tags"
                :key="tag.id"
                :name="tag.taggable.name"
                class="mt-2"
            >
            </tag>
        </div>
    </div>
</template>
