<template>
    <div
        class="flex flex-wrap border-t py-3 px-10 lg:p-10"
        :class="`bg-${$store.getters.primaryThemeBg} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
    >
        <div
            class="w-full border-b border-b-2 lg:w-1/3"
            :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
        >
            <p class="mt-2">
                <a
                    aria-label="facebook"
                    href="https://www.facebook.com/dordoy"
                    rel="noreferrer"
                    target="_blank"
                >
                    <font-awesome-icon
                        :icon="['fab', 'facebook']"
                        class="text-4xl hover:text-blue-700 lg:text-5xl"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                    />
                </a>
                <span
                    class="inline-block p-2"
                    :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                    >-</span
                >
                <a
                    aria-label="twitter"
                    href="https://twitter.com/JDordoy"
                    rel="noreferrer"
                    target="_blank"
                >
                    <font-awesome-icon
                        :icon="['fab', 'twitter']"
                        class="text-4xl hover:text-blue-400 lg:text-5xl"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                    />
                </a>
                <span
                    class="inline-block p-2"
                    :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                    >-</span
                >
                <a
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/james-dordoy-a80686110/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <font-awesome-icon
                        :icon="['fab', 'linkedin']"
                        class="text-4xl hover:text-blue-500 lg:text-5xl"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                    />
                </a>
                <span
                    class="inline-block p-2"
                    :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                    >-</span
                >
                <a
                    aria-label="github"
                    href="https://github.com/jamesdordoy"
                    rel="noreferrer"
                    target="_blank"
                >
                    <font-awesome-icon
                        :icon="['fab', 'github']"
                        class="text-4xl hover:text-gray-500 lg:text-5xl"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                    />
                </a>
                <span
                    class="inline-block p-2"
                    :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                    >-</span
                >
                <a
                    aria-label="jsfiddle"
                    href="https://jsfiddle.net/user/JamesDordoy/fiddles/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <font-awesome-icon
                        :icon="['fab', 'jsfiddle']"
                        class="text-4xl hover:text-yellow-500 lg:text-5xl"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                    />
                </a>
            </p>
        </div>
        <div class="varela w-full py-6 text-gray-400 lg:w-1/3 lg:py-0 lg:pt-2 lg:text-center">
            <h3 :class="`text-${$store.getters.primaryThemeTextColour}`">&copy; James Dordoy</h3>
            <p></p>
        </div>
        <div class="w-full lg:w-1/3">
            <div id="newsletter">
                <form
                    action="/newsletter"
                    method="POST"
                    @submit.prevent="submitNewsletterForm"
                ></form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        newsletterFormUrl: {
            type: String,
            default: '/',
        },
    },
    data: function () {
        return {
            payload: {
                email: '',
            },
        };
    },
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
    },
    methods: {
        resetPayload() {
            this.payload = {
                email: '',
            };
        },
    },
};
</script>
