<template>
    <div>
        <h2
            class="text-3xl varela mb-8"
            :class="`text-${$store.getters.primaryThemeTextColour}`">My Experience</h2>
        <div class="timeline-container">
            <div class="timeline" :class="`timeline-${$store.getters.primaryThemeColour}`">
                <div class="min-h-screen">
                    <div class="min-h-screen flex justify-center">
                        <div class="w-full mx-2">
                            <div v-for="event in timeline" :key="event.id">
                                <div  class="flex flex-row w-full" v-if="( event.id & 1 )">
                                    <!-- left col -->
                                    <div class="w-2/5 py-10">
                                        <div class="flex flex-col w-full rounded-lg shadow px-4 py-5" :class="`bg-${$store.getters.primaryThemeBgDarker}`">
                                            <div class="text-gray-600 mb-2 flex justify-between">

                                                <div :class="`text-${$store.getters.primaryThemeTextColour}`" class="font-bold">
                                                    <p class="text-lg mb-1" v-html="event.name"></p>
                                                    {{ event.title }}
                                                </div>
                                                <div class="flex flex-row">
                                                    <button class="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i class="far fa-edit"></i></button>
                                                    <button class="text-red-500 hover:text-red-300 transition duration-200"><i class="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <p v-html="event.description" :class="`text-${$store.getters.primaryThemeTextColour}`"></p>
                                        </div>

                                    </div>
                                    <!--line column-->
                                    <div class="w-1/5  flex justify-center">
                                        <div class="relative flex h-full w-1 items-center justify-center" :class="`bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                                            <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 font-thin" :class="`bg-${$store.getters.primaryThemeBgDarker} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                                                {{ event.to|dateDifference(event.from) }} Year Ago
                                            </div>
                                        </div>
                                    </div>
                                    <!--right column-->
                                    <div class="w-2/5 px-2 py-10 "></div>
                                </div>
                                <div class="flex flex-row w-full" v-else>
                                    <!-- left col -->
                                    <div class="w-2/5 px-2 py-10"></div>
                                    <!--line column-->
                                    <div class="w-1/5  flex justify-center">
                                        <div class="relative flex h-full w-1 items-center justify-center" :class="`bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                                            <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 font-thin" :class="`bg-${$store.getters.primaryThemeBgDarker} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                                                {{ event.to|dateDifference }} Years Ago
                                            </div>
                                        </div>
                                    </div>
                                    <!--right column-->
                                    <div class="w-2/5 px-2 py-10 ">
                                        <div class="flex flex-col w-full rounded-lg shadow px-4 py-5" :class="`bg-${$store.getters.primaryThemeBgDarker}`">
                                            <div class="text-gray-600 mb-2 flex justify-between">

                                                <div :class="`text-${$store.getters.primaryThemeTextColour}`" class="font-bold">
                                                    <p class="text-lg mb-1" v-html="event.name"></p>
                                                    {{ event.title }}
                                                </div>
                                            </div>
                                            <p v-html="event.description" :class="`text-${$store.getters.primaryThemeTextColour}`"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        timeline: {
            type: Array,
            default: () => ([])
        }
    },
}
</script>
