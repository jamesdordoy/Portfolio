<template>
    <section class="projects">
      <span class="anchor" id="projects"></span>
      <h2 class="varela text-center">Projects</h2>
      <ul class="project-thumbs">
          <li v-for="project in this.projects" :key="project.id">
              <h2>{{ project.name }}</h2>
              <img :src='"/images/projects/" + project.icon' />
          </li>
      </ul>
    </section>
</template>

<script>
    export default{
        props: {
            projects: {
            type: Array,
            default: []
            },
        },
    }
</script>