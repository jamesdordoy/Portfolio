<template>
    <section class="flex flex-col">

        <div class="flex mt-10" v-for="(group, index) in projectGroups" :key="index">
            <div
                class="lg:w-1/4 md:w-full rounded overflow-hidden shadow-lg mr-4 bg-black"
                style="object-fit: cover; height: 100%;"
                :key="project.id"
                v-for="project in projects.slice(index * itemsPerRow, (index + 1) * itemsPerRow)">
                <a
                    :href="project.link"
                    target="_blank">
                    <img class="w-full"
                        :src='project.icon ? project.icon : "/images/projects/simple-shopping.png"'/>
                </a>
                
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        <a :href="project.link" class="visted:color-teal" target="_blank">{{ project.name }}</a>
                    </div>
                    <p class="text-grey-darker text-base">
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
</template>

<script>
    export default{
        data() {
            return {
                itemsPerRow: 4,
            };
        },
        props: {
            projects: {
                type: Array,
                default: []
            },
        },
        computed: {
            projectGroups () {
                return Array.from(Array(Math.ceil(this.projects.length / this.itemsPerRow)).keys())
            }
        },
    }
</script>