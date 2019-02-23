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
      <div class="w-full p-10 bg-black">
        <span class="anchor" id="about"></span>
        <h2 class="text-center varela mb-8 text-grey">About Me</h2>
        <p class="varela text-center text-xl text-grey">{{ about.me }}</p>
        <div class="flex justify-center items-center py-6">
          <img src="/images/me.jpeg" class="rounded-full"/>
        </div>

        <h2 class="text-center varela mb-8 text-grey">Experiance</h2>
        
      </div>

      <div class="w-full p-10 bg-nav">
        <span class="anchor" id="projects"></span>
        <h2 class="varela text-center text-grey mb-8">Projects</h2>
        <projects
          :projects="projects">
        </projects>
      </div>

      <div class="w-full p-10 bg-black">
        <div class="flex flex-col">
          <span class="anchor" id="languages"></span>
          <h2 class="varela text-center text-grey mb-8">Programming Languages, Libraries &amp; Frameworks I Like</h2>
        </div>
        <languages
          :languages="languages">
        </languages>
      </div>

      <div class="flex flex-wrap p-10 bg-nav content-start">
        <span class="anchor" id="contact"></span>
        <div class="w-full lg:w-1/2 py-8">
          <h2 class="varela mb-4 text-grey">Twitter Timeline</h2>
          <tweets
            :tweets="tweets">
          </tweets>
        </div>
        <div class="w-full lg:w-1/2 py-8 pl-6">
          <h2 class="varela mb-4 text-grey">Contact Me</h2>
          <contact-form
            :url="contactFormUrl"
            :method="'POST'">
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
    props: ['projects', 'languages', 'about', 'auth', 'tweets', 'contactFormUrl'],
  }
</script>