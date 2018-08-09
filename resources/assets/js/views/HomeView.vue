<template>
  <div class="fullscreen">
      <coming-soon>
      </coming-soon>
      <projects
        :projects="projects">
      </projects>
    </div>
</template>

<script>    
    export default {
      props: ['projects', 'languages']
    }
</script>