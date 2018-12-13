<template>
  <div class="h-full bg-nav">

    <div class="h-full">
      <particles>
        <div class="border-teal-light border pin-none rounded p-8 text-center text-white">
          <h1>Full Stack Developer</h1>
        </div>
      </particles>
    </div>
    

    <div class="w-full bg-bg-col">
        <h1>About Me</h1>
        <p>I am a full stack developer</p>
      </div>

      <div class="w-full bg-nav">
        <projects
          :projects="projects">
        </projects>
      </div>

      <languages
        :languages="languages">
      </languages>
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
      props: ['projects', 'languages']
    }
</script>