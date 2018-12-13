<template>
  <section class="bg-bg-col">
    <span class="anchor" id="code"></span>
    <h2>Programming Languages, Libraries &amp; Frameworks I Like</h2>
    <ul class="libary">
      <li v-for="language in languages" :key="language.id"> 
        <h2>Title: {{ language.name }}</h2>
        <img :src='"/images/languages/" + language.icon' />
      </li>
    </ul>
  </section>
</template>

<style>

</style>

<script>
export default{
    props: ['languages'],
}
</script>