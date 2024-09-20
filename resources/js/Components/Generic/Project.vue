<script lang="ts" setup>
import { PropType } from 'vue';
import Tag from '@/Components/Generic/PortfolioTag.vue';
import { usePortfolioStore } from '@/Stores/index';

const portfolioStore = usePortfolioStore();

defineProps({
    project: {
        type: Object as PropType<App.Models.Data.Project>,
        required: true,
    },
});
</script>

<template>
    <article
        :key="project.id"
        class="project"
        :class="`bg-${portfolioStore.primaryThemeBgDarker} border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
    >
        <a
            :href="project.link"
            rel="noreferrer"
            target="_blank"
        >
            <img
                :alt="project.name"
                :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
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
                :class="`text-${portfolioStore.primaryThemeTextColour}`"
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
    </article>
</template>
