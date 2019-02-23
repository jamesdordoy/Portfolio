<template>
    <section class="flex flex-col">
        <div class="flex">
            <div class="max-w-sm rounded overflow-hidden shadow-lg mr-4 bg-black" style="object-fit: cover; height: 100%;" v-for="project in this.projects" :key="project.id">
                <a :href="project.link" target="_blank"><img class="w-full" :src='project.icon'/></a>
                
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
        props: {
            projects: {
                type: Array,
                default: []
            },
        },
        created() {
            
        }
    }
</script>