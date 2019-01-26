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
      <div class="w-full p-10 bg-teal-lighter" id="about">
        <h2 class="text-center varela ">About Me</h2>
        <p>{{ about.me }}</p>
      </div>

      <div class="w-full p-10 bg-nav" id="projects">
        <projects
          :projects="projects">
        </projects>
      </div>

      <div class="w-full p-10 bg-teal-lighter" id="langauges">
        <languages
          :languages="languages">
        </languages>
      </div>

      <div class="w-full p-10 bg-nav flex content-start" id="projects">
        <tweets
          :tweets="tweets">
        </tweets>
        <contact-form>
          </contact-form>
      </div>

      <footer class="bg-footer w-full flex p-6">
       
          <div class="w-1/3">
            <p>
              <a href="https://www.facebook.com/dordoy" target="_blank">
                <i class="fa fa-facebook fa-2x text-white"></i>
              </a> -
              <a href="https://twitter.com/JDordoy" target="_blank">
                <i class="fa fa-twitter fa-2x text-white"></i>
              </a> -
              <a href="https://plus.google.com/u/0/108820602359020977660" target="_blank">
                <i class="fa fa-google-plus fa-2x text-white"></i>
              </a> -
              <a href="https://github.com/jamesdordoy" target="_blank">
                <i class="fa fa-github fa-2x text-white"></i>
              </a> -
              <a href="https://jsfiddle.net/user/JamesDordoy/fiddles/" target="_blank">
                <i class="fa fa-jsfiddle fa-2x text-white" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class="w-1/3 text-center varela text-white pt-2">
            <h4>&copy; James Dordoy</h4>
          </div>
          <div class="w-1/3">
            
            <div id="newsletter">
              <form action="/newsletter" method="POST">

                <div class="md:flex md:items-center">
                  <div class="md:w-1/2">
                    <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                      News Letter Signup
                    </label>
                  </div>
                  <div class="md:w-1/2">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email">
                  </div>
                </div>
                
              </form>
            </div>
          </div>
      </footer>
    </div>    
  </div>
</template>

<style>

.facebook {
  background: #00ffff;
}

</style>

<script>    
    export default {
      props: ['projects', 'languages', 'about', 'auth', 'tweets'],
    }
</script>