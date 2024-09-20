<script lang="ts" setup>
import BaseColourButton from '@/Components/Base/BaseColourButton.vue';
import RangeInput from '@/Components/Inputs/RangeInput.vue';
import { usePortfolioStore } from '@/Stores/index';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const portfolioStore = usePortfolioStore();

const emit = defineEmits(['toggle']);

const showSettings = () => {
    emit('toggle', false);
};
const updatePrimaryThemeColour = (colour: string) => {
    portfolioStore.primaryThemeColour = colour;
};
const updatePrimaryThemeColourShade = (event: Event) => {
    portfolioStore.primaryThemeColourShade = event?.target?.value;
};
const updateTheme = (event: Event) => {
    portfolioStore.primaryTheme = event?.target?.value;
};
const updateThemeRouterAnimation = (event: Event) => {
    portfolioStore.primaryThemeRouterAnimation = event?.target?.value;
};

defineProps({
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
                    :class="`text-${portfolioStore.primaryThemeTextColour}`"
                >
                    Theme Settings
                </h2>
            </div>
            <div class="w-2/6">
                <button
                    :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    class="float-right mt-1"
                    @click="showSettings"
                >
                    <font-awesome-icon :icon="faTimes" />
                </button>
            </div>
        </div>
        <hr class="my-1" />
        <div class="flex flex-wrap px-3 py-2">
            <!-- <div class="w-full">
                <h3
                    class="mb-2 text-lg"
                    :class="`text-${portfolioStore.primaryThemeTextColour}`"
                >
                    Theme Mode
                </h3>
            </div>
            <div class="w-full">
                <div class="relative block">
                    <select
                        :value="portfolioStore.primaryTheme"
                        class="focus:shadow-outline block w-full appearance-none rounded px-4 py-2 pr-8 leading-tight shadow focus:outline-none"
                        :class="`bg-${portfolioStore.primaryThemeBgLighter} text-${portfolioStore.primaryThemeTextColour} focus:bg-${portfolioStore.primaryThemeBgDarkest}`"
                        @change="updateTheme"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <hr class="my-2" />
            </div> -->
            <div class="w-full">
                <h3
                    class="mb-2 text-lg"
                    :class="`text-${portfolioStore.primaryThemeTextColour}`"
                >
                    Theme Colour
                </h3>
            </div>
            <div class="w-full">
                <div class="flex flex-wrap">
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="blue"
                            @click="updatePrimaryThemeColour('blue')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="teal"
                            @click="updatePrimaryThemeColour('teal')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="purple"
                            @click="updatePrimaryThemeColour('purple')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="green"
                            @click="updatePrimaryThemeColour('green')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="red"
                            @click="updatePrimaryThemeColour('red')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="orange"
                            @click="updatePrimaryThemeColour('orange')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="yellow"
                            @click="updatePrimaryThemeColour('yellow')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="indigo"
                            @click="updatePrimaryThemeColour('indigo')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="pink"
                            @click="updatePrimaryThemeColour('pink')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="lime"
                            @click="updatePrimaryThemeColour('lime')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="sky"
                            @click="updatePrimaryThemeColour('sky')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="emerald"
                            @click="updatePrimaryThemeColour('emerald')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="stone"
                            @click="updatePrimaryThemeColour('stone')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="zinc"
                            @click="updatePrimaryThemeColour('zinc')"
                        />
                    </div>
                    <div class="w-1/6 p-1">
                        <BaseColourButton
                            colour="slate"
                            @click="updatePrimaryThemeColour('slate')"
                        />
                    </div>
                </div>
                <hr class="my-2" />
                <div class="w-full">
                    <h3
                        class="mb-2 text-lg"
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
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
