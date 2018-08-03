<template>
  <div class="fullscreen">
      <coming-soon>
      </coming-soon>
      <projects
        :projects="projects">
      </projects>
      <languages
        :languages="languages">
      </languages>
    </div>
</template>

<script>    
    export default {
      props: ['projects', 'languages']
    }
</script>