<template>
    <section class="flex flex-col">
        <div class="flex">
            <div class="max-w-sm rounded overflow-hidden shadow-lg mr-4 bg-nav" v-for="language in languages" :key="language.id">
                <img class="w-full" :src='language.icon' alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        {{ language.name }}
                    </div>
                    <p class="text-grey-darker text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                        nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <tag>
                    </tag>
                    <tag>
                    </tag>
                    <tag>
                    </tag>
                </div>
            </div>
        </div>
  </section>
</template>

<style>

</style>

<script>
export default{
    props: {
        languages: {
            type: Array,
            default: []
        },
    }
}
</script>