<template>
    <div>
        <div class="flex flex-wrap px-3 py-2">
            <div class="w-4/6">
                <h2
                    class="text-xl"
                    :class="`text-${$store.getters.primaryThemeTextColour}`">Theme Settings</h2>
            </div>
            <div class="w-2/6">
                <button @click="showSettings"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                        class="float-right mt-1">
                    <font-awesome-icon :icon="['fas', 'times']" />
                </button>
            </div>
        </div>
        <hr class="my-1">
        <div class="flex flex-wrap px-3 py-2">
            <div class="w-full">
                <h3
                    class="text-lg mb-2"
                    :class="`text-${$store.getters.primaryThemeTextColour}`">Theme Mode</h3>
            </div>
            <div class="w-full">
                <div class="block relative">
                    <select
                        @change="updateTheme"
                        :selected="$store.getters.primaryTheme"
                        class="block appearance-none w-full px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <hr class="my-2">
            </div>
            <div class="w-full">
                <h3
                    class="text-lg mb-2"
                    :class="`text-${$store.getters.primaryThemeTextColour}`">
                    Theme Colour
                </h3>
            </div>
            <div class="w-full">
                <div class="flex flex-wrap">
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="blue"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="teal"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="purple"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="green"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="red"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="orange"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="yellow"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="indigo"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                    <div class="w-1/6 p-1">
                        <colour-button
                            colour="pink"
                            @click="updatePrimaryThemeColour">
                        </colour-button>
                    </div>
                </div>
                <hr class="my-2">
                <div class="w-full">
                    <h3
                        class="text-lg mb-2"
                        :class="`text-${$store.getters.primaryThemeTextColour}`">Theme Colour Shade</h3>
                </div>
                <div class="w-full">
                    <div class="block relative">
                       <tailwind-range-input
                            @input="updatePrimaryThemeColourShade">
                       </tailwind-range-input>
                    </div>
                    <hr class="my-2">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ColourButton from '../../components/ColourButton';
import TailwindRangeInput from '../../components/TailwindRangeInput';

export default {
    components: {
        ColourButton,
        TailwindRangeInput
    },
    props: {
        hidden: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        showSettings() {
            this.$emit("toggle", false);
        },
        updatePrimaryThemeColour(colour) {
            this.$store.commit("setPrimaryThemeColor", colour)
        },
        updatePrimaryThemeColourShade(colour) {
            this.$store.commit("setPrimaryThemeColorShade", colour)
        },
        updateTheme(event) {
            this.$store.commit("setPrimaryTheme", event.target.value)
        },
        updateThemeRouterAnimation(event) {
            this.$store.commit("setPrimaryThemeRouterAnimation", event.target.value)
        }
    },
    computed: {
        getTheme() {
            return this.$store.getters.primaryTheme;
        }
    }
}
</script>
