<script lang="ts" setup>
import PortfolioTag from '@/components/generic/PortfolioTag.vue';
import ExternalLink from '@/components/base/ExternalLink.vue';

defineProps<{
    project: App.Dto.Project;
}>();
</script>

<template>
    <article class="card group flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5">
        <ExternalLink :href="project.link" class="block overflow-hidden">
            <img
                :alt="project.name"
                :src="project.icon || '/images/projects/simple-shopping.png'"
                class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </ExternalLink>
        <div class="flex flex-1 flex-col p-5">
            <h3 class="mb-2 font-semibold">
                <ExternalLink
                    :href="project.link"
                    class="text-slate-900 transition-colors hover:text-cyan-600 dark:text-zinc-100 dark:hover:text-cyan-400"
                >
                    {{ project.name }}
                </ExternalLink>
            </h3>
            <p class="mb-4 flex-1 text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
                {{ project.description }}
            </p>
            <div v-if="project.tags" class="flex flex-wrap gap-1.5">
                <PortfolioTag
                    v-for="tag in project.tags"
                    :key="tag.id"
                    :name="tag.taggable.name"
                />
            </div>
        </div>
    </article>
</template>
