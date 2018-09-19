<template>
  <div class="fullscreen">
      <coming-soon>
      </coming-soon> 
      <projects
        :projects="projects">
      </projects>
      <div class="col-md-12" style="padding: 40px; background: #ccc;">
        <div class="col-md-6">
          <playground-form>
          </playground-form>
        </div>    
      </div>

    </div>
</template>

<script>    
    export default {
      props: ['projects', 'languages']
    }
</script>