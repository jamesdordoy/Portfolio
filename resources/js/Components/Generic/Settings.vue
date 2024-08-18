<script lang="ts" setup>
import ColourButton from '@/components/buttons/ColourButton.vue';
import RangeInput from '@/components/inputs/RangeInput.vue';
import { computed } from 'vue';

import { useStore } from 'vuex';

const emit = defineEmits(['toggle']);

const store = useStore();

const getTheme = computed<string>(() => store.getters.primaryTheme);

const showSettings = () => {
    emit('toggle', false);
};
const updatePrimaryThemeColour = (colour: string) => {
    console.log(colour);
    store.commit('setPrimaryThemeColor', colour);
};
const updatePrimaryThemeColourShade = (event: Event) => {
    store.commit('setPrimaryThemeColorShade', event?.target?.value);
};
const updateTheme = (event: Event) => {
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
                        <ColourButton
                            colour="blue"
                            @click="updatePrimaryThemeColour('blue')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="teal"
                            @click="updatePrimaryThemeColour('teal')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="purple"
                            @click="updatePrimaryThemeColour('purple')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="green"
                            @click="updatePrimaryThemeColour('green')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="red"
                            @click="updatePrimaryThemeColour('red')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="orange"
                            @click="updatePrimaryThemeColour('orange')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="yellow"
                            @click="updatePrimaryThemeColour('yellow')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="indigo"
                            @click="updatePrimaryThemeColour('indigo')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="pink"
                            @click="updatePrimaryThemeColour('pink')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="lime"
                            @click="updatePrimaryThemeColour('lime')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="sky"
                            @click="updatePrimaryThemeColour('sky')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="emerald"
                            @click="updatePrimaryThemeColour('emerald')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="stone"
                            @click="updatePrimaryThemeColour('stone')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="zinc"
                            @click="updatePrimaryThemeColour('zinc')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <ColourButton
                            colour="slate"
                            @click="updatePrimaryThemeColour('slate')"
                        />
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
