<script setup>
import Tag from '@/Components/Generic/PortfolioTag.vue';

defineProps({
    projects: {
        type: Array,
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
            :class="`text-${$store.getters.primaryThemeTextColour}`"
        >
            Projects
        </h2>
        <section class="flex flex-wrap">
            <div
                v-for="project in projects"
                :key="project.id"
                class="mb-4 w-full px-2 md:w-1/2 lg:w-1/3"
            >
                <div
                    :key="project.id"
                    class="project h-full border sm:w-full"
                    :class="`bg-${$store.getters.primaryThemeBgDarker} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                >
                    <a
                        :href="project.link"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            style="height: 250px"
                            :alt="project.name"
                            :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                            class="w-full border-b"
                            :src="project.icon ? project.icon : '/images/projects/simple-shopping.png'"
                        />
                    </a>

                    <div class="px-6 py-4">
                        <div class="mb-2 text-xl font-bold">
                            <a
                                :href="project.link"
                                rel="noreferrer"
                                class="text-blue-500 underline hover:no-underline"
                                target="_blank"
                                >{{ project.name }}</a
                            >
                        </div>
                        <p
                            class="text-base"
                            :class="`text-${$store.getters.primaryThemeTextColour}`"
                        >
                            {{ project.description }}
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        <tag
                            v-for="tag in project.tags"
                            :key="tag.id"
                            :name="tag.name"
                        >
                        </tag>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
