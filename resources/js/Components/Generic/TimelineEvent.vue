<script lang="ts" setup>
import { PropType } from 'vue';
import { useStore } from 'vuex';

defineProps({
    event: {
        type: Object as PropType<App.Models.Data.TimelineEvent>,
        required: true,
    },
});

const store = useStore();
</script>

<template>
    <div
        v-if="event?.id & 1"
        class="flex w-full flex-row"
    >
        <div class="w-4/5 py-10">
            <div
                class="flex w-full flex-col border-b px-4 py-5 shadow"
                :class="`bg-${store.getters.primaryThemeBgDarkest} border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
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
                        <button class="mr-2 text-blue-500 transition duration-200 hover:text-blue-300">
                            <i class="far fa-edit"></i>
                        </button>
                        <button class="text-red-500 transition duration-200 hover:text-red-300">
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
                        <p class="mb-1 text-lg">{{ event.name }}</p>
                        {{ event.title }}
                    </div>
                </div>
                <p :class="`text-${store.getters.primaryThemeTextColour}`" v-html="event.body"></p>
            </div>
        </div>
    </div>
</template>
