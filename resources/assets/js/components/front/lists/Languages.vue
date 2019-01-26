<template>
  <section class="flex flex-col">
    <div class="flex flex-col">
      <span class="anchor" id="code"></span>
      <h2 class="varela text-center">Programming Languages, Libraries &amp; Frameworks I Like</h2>
    </div>
    <div class="flex">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mr-4 bg-white" v-for="language in languages" :key="language.id">
        <img class="w-full" :src='language.icon' alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ language.name }}</div>
          <p class="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>

<script>
export default{
    props: ['languages'],
}
</script>