<template>
  <div class="h-full bg-nav">

    <div class="h-full">
      <particles>
        <div style="background: rgba(0, 0, 0, 0.4); text-shadow: 0px 0px 2px #131415;" class="border-teal-light border pin-none rounded p-8 mt-20 text-center text-white">
          <h1 class="varela text-5xl">James Dordoy</h1>
          <h2 class="varela">Full Stack Developer</h2>
          <p class="varela">From Essex</p>
        </div>
      </particles>
    </div>

    <div class="w-full">
      <div class="w-full px-10 py-12 bg-black">
        <span class="anchor" id="about"></span>
        <h2 class="text-center varela mb-8 text-grey">About Me</h2>
        <p class="about-me">
          Hey, my name is James and im a Software Enginer living in Essex. I have been developing software for over eight years now and i have a large range of experiance from creating simple Android applications to working on large scale CMS and CRM systems.
        </p>
        <br>
        <p class="about-me">
          Since leaving University, i have mainly been working with PHP &amp; Laravel. I also have a solid background in JavaScript &amp; Java but picking up a difference langauge isn't a problem.
        </p>
        <br>
        <p class="about-me">
          I am currently picking up TypeScript and enjoying it
        </p>
        <div class="flex justify-center items-center py-6">
          <img src="/images/me.jpeg" alt="James Dordoy - Me" class="rounded-full"/>
        </div>
      </div>

      <div class="w-full px-10 py-12 bg-nav">
        <span class="anchor" id="projects"></span>
        <h2 class="varela text-center text-grey mb-8">Projects</h2>        
        <projects
          :projects="projects">
        </projects>
      </div>

      <div class="px-10 py-12 bg-black">
        <span class="anchor" id="languages"></span>
        <h2 class="varela text-center text-grey mb-8">What i've been up to</h2>
        <div class="flex flex-wrap -mx-2">
          <div v-for="post in posts.data" :key="post.id" class="md:w-1/2 lg:w-1/3 w-full mb-4 px-2">
            <div class="bg-nav p-4">
              <div class="h-8">
                <h4 class="text-grey-dark">{{ post.title }}</h4>
              </div>
              <small>{{ post.subtitle }}</small>
              <hr>
              <div class="h-12">
                <p class="text-grey-dark">{{ post.excerpt }}</p>
              </div>
              <hr>
              <p class="text-grey-dark text-right">Posted On: {{ post.created_at|formatDate("DD/MM/YYYY") }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap px-10 py-2 bg-nav content-start">
        <span class="anchor" id="contact"></span>
        <div class="w-full lg:w-1/2 py-8 lg:pr-2">
          <h2 class="varela  py-4 px-2 text-grey">Experiance</h2>
          <timeline
            :items="timeline"
            message-when-no-items="No data">
          </timeline>
          <!-- <show-at breakpoint="mediumAndBelow" :breakpoints="{medium: 991}" >
            <div class="timeline-spacing border-b pt-6 border-teal"></div>
          </show-at> -->
        </div>
        
        <div class="w-full lg:w-1/2 py-8">
          
          <h2 class="varela mb-4 py-4 text-grey">Contact Me</h2>
          <contact-form
            :url="contactFormUrl"
            :method="'POST'">
          </contact-form>
        </div>
      </div>

      <front-footer
        :newsletter-form-url="newsletterFormUrl">
      </front-footer>
    </div>    
  </div>
</template>

<script>

  import {showAt, hideAt} from 'vue-breakpoints';
  import IndexService from '../../services/IndexService';

  export default {
    data() {
      return {
        auth: {},
        about: '',
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
      showAt
    },
    created() {
      this.getLanguages();
      this.getProjects();
      this.getPosts();
      this.getTimeline();
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