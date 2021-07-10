<template>
    <div v-show="displayGDRP">
        <div
            class="
                flex flex-wrap
                fixed
                bottom-0
                right-0
                left-0
                p-6
                z-10
                bg-gray-800
                opacity-75
                text-white
            "
        >
            <div class="w-full lg:w-4/6 p-1">
                <p>
                    This website uses cookies (including tracking technologies)
                    to improve user experience. If you continue on this website
                    you will be providing your consent to our use of these. You
                    can see our cookies and learn how to manage them by clicking
                    on the Privacy Preferences option to the right.
                </p>
            </div>
            <div
                class="w-full lg:w-2/6 p-1 flex flex-wrap lg:justify-end pr-16"
            >
                <div>
                    <button
                        class="
                            flex-shrink-0
                            bg-transparent
                            text-sm
                            border
                            py-1
                            px-2
                            rounded
                            lg:ml-4
                        "
                        :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`"
                        @click="showModal = true"
                    >
                        <font-awesome-icon :icon="['fas', 'list']" />
                        Privacy Preferences
                    </button>
                    <button
                        class="
                            flex-shrink-0
                            bg-transparent
                            text-sm
                            border
                            py-1
                            px-2
                            rounded
                            ml-4
                        "
                        :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`"
                        @click="acceptGDRP"
                    >
                        <font-awesome-icon :icon="['fas', 'check']" />
                        I Agree
                    </button>
                </div>
            </div>
        </div>
        <privacy-preferences :modal-open="showModal" @close="showModal = false">
        </privacy-preferences>
    </div>
</template>

<script>
import PrivacyPreferences from './PrivacyPreferences.vue';

export default {
    components: {
        PrivacyPreferences,
    },
    data() {
        return {
            showModal: false,
        };
    },
    computed: {
        displayGDRP() {
            return !this.$store.getters.hasUserAcceptedGDPR;
        },
    },
    methods: {
        acceptGDRP() {
            this.$store.commit('userAcceptedGDRP');
        },
    },
};
</script>
