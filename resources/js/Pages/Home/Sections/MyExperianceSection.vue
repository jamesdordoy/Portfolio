<script setup>
import { useStore } from 'vuex';

const store = useStore();

defineProps({
    timeline: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div>
        <h2
            class="varela mb-8 text-center text-3xl"
            :class="`text-${store.getters.primaryThemeTextColour}`"
        >
            My Experience
        </h2>
        <div class="timeline-container">
            <div
                class="timeline"
                :class="`timeline-${store.getters.primaryThemeColour}`"
            >
                <div class="min-h-screen">
                    <div class="flex min-h-screen justify-center">
                        <div class="mx-2 w-full">
                            <div
                                v-for="event in timeline"
                                :key="event.id"
                            >
                                <div
                                    v-if="event.id & 1"
                                    class="flex w-full flex-row"
                                >
                                    <div class="w-4/5 py-10">
                                        <div
                                            class="flex w-full flex-col border-b px-4 py-5 shadow"
                                            :class="`bg-${store.getters.primaryThemeBgDarker} border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                                        >
                                            <div class="mb-2 flex justify-between text-gray-600">
                                                <div
                                                    :class="`text-${store.getters.primaryThemeTextColour}`"
                                                    class="font-bold"
                                                >
                                                    <p
                                                        class="mb-1 text-lg"
                                                        v-html="event.name"
                                                    ></p>
                                                    {{ event.title }}
                                                </div>
                                                <div class="flex flex-row">
                                                    <button
                                                        class="mr-2 text-blue-500 transition duration-200 hover:text-blue-300"
                                                    >
                                                        <i class="far fa-edit"></i>
                                                    </button>
                                                    <button
                                                        class="text-red-500 transition duration-200 hover:text-red-300"
                                                    >
                                                        <i class="far fa-trash-alt"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <p
                                                :class="`text-${store.getters.primaryThemeTextColour}`"
                                                v-html="event.body"
                                            ></p>
                                        </div>
                                    </div>
                                    <div class="flex w-1/5 justify-center">
                                        <font-awesome-icon
                                            class="m-auto text-5xl"
                                            :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                                            :icon="event.icon"
                                        >
                                        </font-awesome-icon>
                                    </div>
                                </div>
                                <div
                                    v-else
                                    class="flex w-full flex-row"
                                >
                                    <div class="flex w-1/5 justify-center">
                                        <font-awesome-icon
                                            class="m-auto text-5xl"
                                            :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                                            :icon="event.icon"
                                        >
                                        </font-awesome-icon>
                                    </div>
                                    <div class="w-4/5 px-2 py-10">
                                        <div
                                            class="flex w-full flex-col border-b px-4 py-5 shadow"
                                            :class="`bg-${store.getters.primaryThemeBgDarker} border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                                        >
                                            <div class="mb-2 flex justify-between text-gray-600">
                                                <div
                                                    :class="`text-${store.getters.primaryThemeTextColour}`"
                                                    class="font-bold"
                                                >
                                                    <p
                                                        class="mb-1 text-lg"
                                                        v-html="event.name"
                                                    ></p>
                                                    {{ event.title }}
                                                </div>
                                            </div>
                                            <p
                                                :class="`text-${store.getters.primaryThemeTextColour}`"
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
