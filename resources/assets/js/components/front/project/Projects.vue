<template>

    <section class="projects">
      <span class="anchor" id="projects"></span>
      <h2>Projects</h2>
      <ul class="project-thumbs">
          <li v-for="project in this.list">

              <h2>Title: {{ project.name }}</h2>
              <img :src='"/images/projects/" + project.icon' />
          </li>
      </ul>
    </section>

</template>

<style>

</style>

<script>

export default{

    props: ['projects'],

    data: function(){
        return {
            list: '',
        };
    },

    created: function(){
        this.list = JSON.parse(this.projects);
    }

}

</script>
