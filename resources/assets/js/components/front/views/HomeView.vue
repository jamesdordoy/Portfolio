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
      <div class="w-full p-10 bg-grey-lighter">
        <span class="anchor" id="about"></span>
        <h2 class="text-center varela mb-8">About Me</h2>
        <p class="text-center text-lg">{{ about.me }}</p>
      </div>

      <div class="w-full p-10 bg-nav">
        <span class="anchor" id="projects"></span>
        <h2 class="varela text-center text-white mb-8">Projects</h2>
        <projects
          :projects="projects">
        </projects>
      </div>

      <div class="w-full p-10 bg-grey-lighter">
        <div class="flex flex-col">
          <span class="anchor" id="languages"></span>
          <h2 class="varela text-center text-header mb-8">Programming Languages, Libraries &amp; Frameworks I Like</h2>
        </div>
        <languages
          :languages="languages">
        </languages>
      </div>

      <div class="flex flex-wrap p-10 bg-nav content-start">
        <span class="anchor" id="contact"></span>
        <div class="w-full lg:w-1/2">
          <tweets
            :tweets="tweets">
          </tweets>
        </div>
        <div class="w-full lg:w-1/2">
          <contact-form>
          </contact-form>
        </div>
      </div>

      <front-footer>
      </front-footer>
    </div>    
  </div>
</template>

<script>    
  export default {
    props: ['projects', 'languages', 'about', 'auth', 'tweets'],
  }
</script>