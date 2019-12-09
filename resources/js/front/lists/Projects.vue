<template>
    <section class="flex flex-wrap">

        <div v-for="project in projects" :key="project.id" class="md:w-1/2 lg:w-1/3 w-full mb-4 px-2">
            <div
                class="project sm:w-full"
                style="height: 100%;"
                :key="project.id">
                <a
                    :href="project.link"
                    target="_blank">
                    <img
                        style="width: 100%; height: 250px;"
                        :src='project.icon ? project.icon : "/images/projects/simple-shopping.png"'/>
                </a>
                
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        <a :href="project.link" class="text-blue visited:text-green hover:no-underline" target="_blank">{{ project.name }}</a>
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

<style>

.hooper {
    height: 500px !important;
    padding: 0 80px;
}

.hooper-progress {
    bottom: -20px !important;
    top: auto !important;
}

</style>

<script>

    import 'hooper/dist/hooper.css';
    import {showAt, hideAt} from 'vue-breakpoints';
    import { Hooper, Slide, Navigation as HooperNavigation, Progress as HooperProgress } from 'hooper';

export default{
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperProgress,
        hideAt,
        showAt
    },
    data() {
        return {
            itemsPerRow: 4,
            height: 0,
            vertical: false,
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
        },
    },
}
</script>