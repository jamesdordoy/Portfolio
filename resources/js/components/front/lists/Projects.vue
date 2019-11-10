<template>
    <section class="flex flex-col">

        <hide-at breakpoint="mediumAndBelow" :breakpoints="{medium: 991}" >
            <hooper :itemsToShow="3" :centerMode="false" pagination="yes" :wheelControl="false">
                <slide v-for="project in projects" :key="project.id">
                
                    <div class="flex projects">
                        <div
                            class="project sm:w-full"
                            style="height: 100%;"
                            :key="project.id">
                            <a
                                :href="project.link"
                                target="_blank">
                                <img
                                    style="width: 100%; height: 200px;"
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
                <hooper-progress slot="hooper-addons"></hooper-progress>
            </hooper>
        </hide-at>
        <show-at breakpoint="mediumAndBelow" :breakpoints="{medium: 991}">
            <hooper :itemsToShow="3" :vertical="true" pagination="yes" :wheelControl="false">
            <slide v-for="project in projects" :key="project.id">
            
                <div class="flex mt-10 projects">
                    <div
                        class="project sm:w-full"
                        style="height: 100%;"
                        :key="project.id">
                        <a
                            :href="project.link"
                            style="width: 100%;"
                            target="_blank">
                            <img
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
            <hooper-progress slot="hooper-addons"></hooper-progress>
        </hooper>
        </show-at>
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

/* .hooper-navigation button {
    border: 1px solid grey;
    color: #fff;
}

.hooper-navigation button .icon {
    color: #fff;
} */

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