<script lang="ts" setup>
import _ from 'lodash';
import { PropType } from 'vue';
import { usePortfolioStore } from '@/Stores/index.ts';
import { faCode, faBuilding, faSchool } from '@fortawesome/free-solid-svg-icons';

const icons = {
    code: faCode,
    building: faBuilding,
    school: faSchool,
};

const portfolioStore = usePortfolioStore();

defineProps({
    event: {
        type: Object as PropType<App.Dto.TimelineEvent>,
        required: true,
    },
});
</script>

<template>
    <article
        v-if="event?.id & 1"
        class="flex w-full flex-row"
    >
        <div class="w-4/5 py-10">
            <div
                class="flex w-full flex-col border-b px-4 py-5 shadow"
                :class="`bg-${portfolioStore.primaryThemeBgDarkest} border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
            >
                <div class="mb-2 flex justify-between text-gray-600">
                    <div
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
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
                    :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    v-html="event.body"
                ></p>
            </div>
        </div>
        <div class="flex w-1/5 justify-center">
            <font-awesome-icon
                class="m-auto text-5xl"
                :class="`text-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                :icon="icons[event.icon]"
            >
            </font-awesome-icon>
        </div>
    </article>
    <article
        v-else
        class="flex w-full flex-row"
    >
        <div class="flex w-1/5 justify-center">
            <font-awesome-icon
                class="m-auto text-5xl"
                :class="`text-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                :icon="icons[event.icon]"
            >
            </font-awesome-icon>
        </div>
        <div class="w-4/5 px-2 py-10">
            <div
                class="flex w-full flex-col border-b px-4 py-5 shadow"
                :class="`bg-${portfolioStore.primaryThemeBgDarker} border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
            >
                <div class="mb-2 flex justify-between text-gray-600">
                    <div
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                        class="font-bold"
                    >
                        <p class="mb-1 text-lg">{{ event.name }}</p>
                        {{ event.title }}
                    </div>
                </div>
                <p
                    :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    v-html="event.body"
                ></p>
            </div>
        </div>
    </article>
</template>
