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
      <div class="w-full p-10 bg-teal-lightest" id="about">
        <h2 class="text-center varela ">About Me</h2>
        <p>{{ about.me }}</p>
      </div>

      <div class="w-full p-10 bg-nav" id="projects">
        <projects
          :projects="projects">
        </projects>
      </div>

      <div class="w-full p-10 bg-teal-lightest" id="langauges">
        <languages
          :languages="languages">
        </languages>
      </div>

      <div class="w-full p-10 bg-nav" id="newsletter">
        <form action="/newsletter" method="POST">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" name="email">
        </form>
      </div>
    </div>
    
    
      <!-- <div class="col-md-12" style="padding: 40px; background: #ececec;">

        <h2 class="text-center">About Me</h2>

        <div class="col-md-6">
          <div class="facebook">
            <h2>Facebook</h2>
          </div>
          <div class="twitter">

          </div>
          <div class="linkedin">

          </div>
        </div>

        <div class="col-md-6">
          <playground-form>
          </playground-form>
        </div>    
      </div> -->

    </div>
</template>

<style>

.facebook {
  background: #00ffff;
}

</style>

<script>    
    export default {
      props: ['projects', 'languages', 'about', 'auth']
    }
</script>