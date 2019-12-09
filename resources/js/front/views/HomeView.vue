<template>
    <div class="h-full bg-nav">
        <front-nav
            :auth="auth">
        </front-nav>

        <div class="h-full" id="home">
            <particles>
                <div class="front-into md:p-8 md:mx-0">
                    <h1 class="varela md:text-5xl sm:text-3xl">James Dordoy</h1>
                    <h2 class="varela md:text-2xl sm:text-1xl">Full Stack Developer</h2>
                    <p class="varela md:text-1xl sm:text-1xl">From Essex</p>
                </div>
            </particles>
        </div>
        <div class="w-full">
            <div class="w-full px-10 py-12 bg-black">
                <span
                    id="about"
                    style="
                        display: block;
                        position: relative;
                        top: -100px;
                        visibility: hidden;">
                </span>
                <about></about>
            </div>

            <div class="w-full px-10 py-12 bg-nav">
                <span
                    id="projects"
                    style="
                      display: block;
                      position: relative;
                      top: -100px;
                      visibility: hidden;">
                </span>
                <h2 class="varela text-center text-grey mb-8">Projects</h2>        
                <projects
                    :projects="projects">
                </projects>
            </div>

            <div class="px-10 py-12 bg-black">
                <span
                    id="blog"
                    style="
                      display: block;
                      position: relative;
                      top: -100px;
                      visibility: hidden;">
                </span>
                <h2 class="varela text-center text-grey mb-8">What i've been up to</h2>
                <blog
                    :posts="posts">
                </blog>
            </div>
            <div class="flex flex-wrap px-10 py-2 bg-nav content-start">
                <span
                    id="contact"
                    style="
                        display: block;
                        position: relative;
                        top: -70px;
                        visibility: hidden;">
                </span>
                <div class="w-full lg:w-1/2 py-8">
                    <h2 class="varela mb-4 py-4 text-grey">Contact Me</h2>
                    <contact-form
                        :url="contactFormUrl"
                        :method="'POST'">
                    </contact-form>
                </div>
                <div class="w-full lg:w-1/2 py-8 lg:pr-2">
                    <h2 class="varela py-4 px-2 text-grey">Experiance</h2>

                    <div class="timeline">
                        <vue-timeline-update
                            v-for="event in timeline"
                            :key="event.id"
                            :date="new Date(event.to)"
                            :title="event.name"
                            :description="event.description"
                            :category="event.title"
                            :icon="event.icon"
                            color="black"
                        />

                    </div>

                    
  
                </div>
                
            </div>
            <front-footer
                :newsletter-form-url="newsletterFormUrl">
            </front-footer>
        </div>    
    </div>
</template>

<script>

import About from '../includes/About';
import IndexService from '../../services/IndexService';

export default {
    data() {
        return {
            projects: [],
            posts: {},
            languages: [],
            tweets: [],
            timeline: [],
            contactFormUrl: '/contact',
            newsletterFormUrl: '/newsletter',
            messageWhenNoItems: 'There arent items',
        };
    },
    components: {
      About,
    },
    created() {
        this.getLanguages();
        this.getProjects();
        this.getPosts();
        this.getTimeline();
    },
    props: {
        auth: {
          type: Object,
          default: () => ({})
        }
    },
    methods: {
        getLanguages() {
            IndexService.languages()
            .then(response => {
                this.languages = response.data;
            })
            .catch(console.log)
        },
        getProjects() {
            IndexService.projects()
            .then(response => {
                this.projects = response.data;
            })
            .catch(console.log)
        },
        getPosts() {
            IndexService.posts()
            .then(response => {
                this.posts = response.data;
            })
            .catch(console.log)
        },
        getTimeline() {
            IndexService.timeline()
            .then(response => {
                this.timeline = response.data.data;
            })
            .catch(console.log)
        }
    },
    computed: {
        postGroups () {
            return Array.from(Array(Math.ceil(this.posts.data.length / 3)).keys())
        },
    }
}
</script>

<style>

.gb-vue-timeline-update {
    /* border-bottom: solid 1px #dae1e7; */
}

.gb-vue-timeline-update__description {
    color: #8795a1 !important;
}

.gb-vue-timeline-update__title {
    color: #b8c2cc !important;
}

.gb-vue-timeline-update__line {
    background: #4dc0b5 !important;
}

.timeline {
    max-width: none !important;
    color: #b8c2cc;
    max-height: 520px;
    overflow: scroll;
}

</style>