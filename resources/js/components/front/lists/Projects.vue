<template>
    <section class="flex flex-col">

        <hooper :itemsToShow="3" :centerMode="false"  pagination="yes" :wheelControl="false">
            <slide v-for="project in projects" :key="project.id">
            
                <div class="flex mt-10 projects">
                    <div
                        class="project sm:w-full"
                        style="object-fit: cover; height: 100%;"
                        :key="project.id">
                        <a
                            :href="project.link"
                            target="_blank">
                            <img
                                class="w-full"
                                style="height: 200px;"
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

            </slide>

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
    </section>
</template>

<style>

.hooper {
    height: 400px !important;
}

.hooper-navigation button {
    border: 1px solid grey;
}

</style>

<script>

      import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default{
    components: {
        Hooper,
        Slide,
        HooperNavigation
    },
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