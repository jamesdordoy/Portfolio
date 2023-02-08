<script lang="ts" setup>
import ColourButton from '@/Components/Buttons/ColourButton.vue';
import RangeInput from '@/Components/Inputs/RangeInput.vue';
import { ref, computed, onUnmounted, isProxy, toRaw } from 'vue';

import { useStore } from 'vuex';

const emit = defineEmits(['toggle']);

const store = useStore();

const getTheme = computed<string>(() => store.getters.primaryTheme);

const showSettings = ( ) => {
    emit('toggle', false);
};
const updatePrimaryThemeColour = (colour: string) => {
    console.log(colour)
    store.commit('setPrimaryThemeColor', colour);
};
const updatePrimaryThemeColourShade = (event: Event) => {
    store.commit('setPrimaryThemeColorShade', event?.target?.value);
};
const updateTheme = (even: Event) => {
    store.commit('setPrimaryTheme', event?.target?.value);
};
const updateThemeRouterAnimation = (event: Event) => {
    store.commit('setPrimaryThemeRouterAnimation', event?.target?.value);
};

const props = defineProps({
    hidden: {
        type: Boolean,
        default: true,
    },
   
});
</script>


<template>
    <div>
        <div class="flex flex-wrap px-3 py-2">
            <div class="w-4/6">
                <h2
                    class="text-xl"
                    :class="`text-${store.getters.primaryThemeTextColour}`"
                >
                    Theme Settings
                </h2>
            </div>
            <div class="w-2/6">
                <button
                    :class="`text-${store.getters.primaryThemeTextColour}`"
                    class="float-right mt-1"
                    @click="showSettings"
                >
                    <font-awesome-icon :icon="['fas', 'times']" />
                </button>
            </div>
        </div>
        <hr class="my-1" />
        <div class="flex flex-wrap px-3 py-2">
            <div class="w-full">
                <h3
                    class="mb-2 text-lg"
                    :class="`text-${store.getters.primaryThemeTextColour}`"
                >
                    Theme Mode
                </h3>
            </div>
            <div class="w-full">
                <div class="relative block">
                    <select
                        :value="store.getters.primaryTheme"
                        class="focus:shadow-outline block w-full appearance-none rounded px-4 py-2 pr-8 leading-tight shadow focus:outline-none"
                        :class="`bg-${store.getters.primaryThemeBgLighter} text-${store.getters.primaryThemeTextColour} focus:bg-${store.getters.primaryThemeBgDarkest}`"
                        @change="updateTheme"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <hr class="my-2" />
            </div>
            <div class="w-full">
                <h3
                    class="mb-2 text-lg"
                    :class="`text-${store.getters.primaryThemeTextColour}`"
                >
                    Theme Colour
                </h3>
            </div>
            <div class="w-full">
                <div class="flex flex-wrap">
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="blue"
                            @click="updatePrimaryThemeColour('blue')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="teal"
                            @click="updatePrimaryThemeColour('teal')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="purple"
                            @click="updatePrimaryThemeColour('purple')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="green"
                            @click="updatePrimaryThemeColour('green')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="red"
                            @click="updatePrimaryThemeColour('red')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="orange"
                            @click="updatePrimaryThemeColour('orange')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="yellow"
                            @click="updatePrimaryThemeColour('yellow')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="indigo"
                            @click="updatePrimaryThemeColour('indigo')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="pink"
                            @click="updatePrimaryThemeColour('pink')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="lime"
                            @click="updatePrimaryThemeColour('lime')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="sky"
                            @click="updatePrimaryThemeColour('sky')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="emerald"
                            @click="updatePrimaryThemeColour('emerald')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="stone"
                            @click="updatePrimaryThemeColour('stone')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="zinc"
                            @click="updatePrimaryThemeColour('zinc')"
                        >
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="slate"
                            @click="updatePrimaryThemeColour('slate')"
                        >
                        </colour-button>
                    </div>
                </div>
                <hr class="my-2" />
                <div class="w-full">
                    <h3
                        class="mb-2 text-lg"
                        :class="`text-${store.getters.primaryThemeTextColour}`"
                    >
                        Theme Colour Shade
                    </h3>
                </div>
                <div class="w-full">
                    <div class="relative block">
                        <RangeInput @input="updatePrimaryThemeColourShade" />
                    </div>
                    <hr class="my-2" />
                </div>
            </div>
        </div>
    </div>
</template>

