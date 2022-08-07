<template>
    <div>
        <h2
            class="text-3xl varela mb-8"
            :class="`text-${$store.getters.primaryThemeTextColour}`"
        >
            My Experience
        </h2>
        <div class="timeline-container">
            <div
                class="timeline"
                :class="`timeline-${$store.getters.primaryThemeColour}`"
            >
                <div class="min-h-screen">
                    <div class="min-h-screen flex justify-center">
                        <div class="w-full mx-2">
                            <div v-for="event in timeline" :key="event.id">
                                <div
                                    v-if="event.id & 1"
                                    class="flex flex-row w-full"
                                >
                                    <!-- left col -->
                                    <div class="w-4/5 py-10">
                                        <div
                                            class="flex flex-col w-full shadow px-4 py-5 border-b"
                                            :class="`bg-${$store.getters.primaryThemeBgDarker} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                                        >
                                            <div
                                                class="text-gray-600 mb-2 flex justify-between"
                                            >
                                                <div
                                                    :class="`text-${$store.getters.primaryThemeTextColour}`"
                                                    class="font-bold"
                                                >
                                                    <p
                                                        class="text-lg mb-1"
                                                        v-html="event.name"
                                                    ></p>
                                                    {{ event.title }}
                                                </div>
                                                <div class="flex flex-row">
                                                    <button
                                                        class="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"
                                                    >
                                                        <i
                                                            class="far fa-edit"
                                                        ></i>
                                                    </button>
                                                    <button
                                                        class="text-red-500 hover:text-red-300 transition duration-200"
                                                    >
                                                        <i
                                                            class="far fa-trash-alt"
                                                        ></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <p
                                                :class="`text-${$store.getters.primaryThemeTextColour}`"
                                                v-html="event.body"
                                            ></p>
                                        </div>
                                    </div>
                                    <!--line column-->
                                    <div class="w-1/5 flex justify-center">
                                        <font-awesome-icon
                                            class="m-auto text-5xl"
                                            :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                                            :icon="event.icon"
                                        >
                                        </font-awesome-icon>
                                    </div>
                                </div>
                                <div v-else class="flex flex-row w-full">
                                    <!--line column-->
                                    <div class="w-1/5 flex justify-center">
                                        <font-awesome-icon
                                            class="m-auto text-5xl"
                                            :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                                            :icon="event.icon"
                                        >
                                        </font-awesome-icon>
                                    </div>
                                    <!--right column-->
                                    <div class="w-4/5 px-2 py-10">
                                        <div
                                            class="flex flex-col w-full shadow px-4 py-5 border-b"
                                            :class="`bg-${$store.getters.primaryThemeBgDarker} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                                        >
                                            <div
                                                class="text-gray-600 mb-2 flex justify-between"
                                            >
                                                <div
                                                    :class="`text-${$store.getters.primaryThemeTextColour}`"
                                                    class="font-bold"
                                                >
                                                    <p
                                                        class="text-lg mb-1"
                                                        v-html="event.name"
                                                    ></p>
                                                    {{ event.title }}
                                                </div>
                                            </div>
                                            <p
                                                :class="`text-${$store.getters.primaryThemeTextColour}`"
                                                v-html="event.body"
                                            ></p>
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
            default: () => [],
        },
    },
};
</script>
