<template>
  <div class="fullscreen">
      <coming-soon>
      </coming-soon> 
      <projects
        :projects="projects">
      </projects>
      <!-- <languages
        :languages="languages">
      </languages> -->
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