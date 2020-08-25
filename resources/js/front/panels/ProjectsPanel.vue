<template>
    <div>
        <span
            id="projects"
            class="jd-bookmark">
        </span>
        <h2
            class="text-3xl varela text-center mb-8"
            :class="`text-${$store.getters.primaryThemeTextColour}`">Projects</h2>
        <section class="flex flex-wrap">

            <div v-for="project in projects" :key="project.id" class="md:w-1/2 lg:w-1/3 w-full mb-4 px-2">
                <div
                    :key="project.id"
                    class="project h-full sm:w-full border"
                    :class="`bg-${$store.getters.primaryThemeBgDarker} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                    <a
                        :href="project.link"
                        target="_blank">
                        <img
                            style="height: 250px;"
                            :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                            class="border-b w-full"
                            :src='project.icon ? project.icon : "/images/projects/simple-shopping.png"'/>
                    </a>

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <a :href="project.link" class="text-blue-500 underline visited:text-green-500 hover:no-underline" target="_blank">{{ project.name }}</a>
                        </div>
                        <p
                            class="text-base"
                            :class="`text-${$store.getters.primaryThemeTextColour}`">
                            {{ project.description }}
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        <tag v-for="tag in project.tags" :key="tag.id"
                            :name="tag.name">
                        </tag>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        projects: {
            type: Array,
            default: [],
            required: true,
        }
    }
}
</script>
