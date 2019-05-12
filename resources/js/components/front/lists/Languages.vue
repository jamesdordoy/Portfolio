<template>
    <section class="flex flex-col">
        <div class="flex mt-10" v-for="(group, index) in languageGroups" :key="index">
            <div
                class="w-1/4 rounded overflow-hidden shadow-lg mr-4 bg-black"
                :key="language.id"
                v-for="language in languages.slice(index * itemsPerRow, (index + 1) * itemsPerRow)">
                <img class="w-full" :src='language.icon ? language.icon : "/images/projects/PointsofInterest.png"'>
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
                </div>
            </div>
        </div>
    </section>
</template>

<style>

</style>

<script>
export default{
    data() {
        return {
            itemsPerRow: 4,
        };
    },
    props: {
        languages: {
            type: Array,
            default: []
        },
    },
    computed: {
        languageGroups () {
            return Array.from(Array(Math.ceil(this.languages.length / this.itemsPerRow)).keys())
        }
    },
}
</script>