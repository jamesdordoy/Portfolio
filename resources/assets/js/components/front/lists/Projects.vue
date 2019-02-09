<template>
    <section class="flex flex-col">
        <div class="flex">
            <div class="max-w-sm rounded overflow-hidden shadow-lg mr-4 bg-white" v-for="project in this.projects" :key="project.id">
                <img :src='"/images/projects/" + project.icon' />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        {{ project.name }}
                    </div>
                    <p class="text-grey-darker text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span v-for="tag in project.tags" :key="tag.id" class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                        #{{ tag.name }}
                    </span>
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
            console.log(this.projects)
        }
    }
</script>