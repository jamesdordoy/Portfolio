<template>
    <div class="h-full bg-primary">
        <front-nav
            :auth="auth">
        </front-nav>
        <div class="h-full" id="home">
            <particles>
                <div class="front-into md:p-8 md:mx-0">
                    <h1 class="varela md:text-4xl sm:text-3xl">James Dordoy</h1>
                    <h2 class="varela md:text-2xl sm:text-1xl">Full Stack Developer</h2>
                    <p class="varela md:text-1xl sm:text-1xl">From Essex</p>
                </div>
            </particles>
        </div>
        <div class="w-full">
            <div class="w-full px-10 py-12 bg-secondary">
                <about-me-panel/>
            </div>

            <div class="w-full px-10 py-12 bg-primary">
                <projects-panel
                    :projects="projects">
                </projects-panel>
            </div>

            <div class="px-10 py-12 bg-secondary">
                <blog-panel
                    :posts="posts">
                </blog-panel>
            </div>
            <div class="flex flex-wrap px-10 py-2 content-start bg-primary">

                <div class="w-full lg:w-1/2 py-8 px-2">
                    <contact-me-panel
                        :contact-form-url="contactFormUrl">
                    </contact-me-panel>
                </div>
                <div class="w-full lg:w-1/2 py-8 lg:pr-2 px-2">
                    <experiance-timeline-panel
                        :timeline="timeline">
                    </experiance-timeline-panel>
                </div>
            </div>
            <front-footer
                :newsletter-form-url="newsletterFormUrl">
            </front-footer>
        </div>
    </div>
</template>

<script>

import BlogPanel from '../panels/BlogPanel';
import AboutMePanel from '../panels/AboutMePanel';
import ProjectsPanel from '../panels/ProjectsPanel';
import ContactMePanel from '../panels/ContactMePanel';
import IndexService from '../../services/IndexService';
import ExperianceTimelinePanel from '../panels/ExperianceTimelinePanel';

export default {
    data() {
        return {
            projects: [],
            posts: {},
            timeline: [],
            contactFormUrl: '/contact',
            newsletterFormUrl: '/newsletter',
        };
    },
    components: {
        BlogPanel,
        AboutMePanel,
        ProjectsPanel,
        ContactMePanel,
        ExperianceTimelinePanel,
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

