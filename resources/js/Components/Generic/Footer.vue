<script lang="ts" setup>
import NewsletterForm from '@/Components/Forms/NewsletterForm.vue';
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();
</script>

<template>
    <footer
        class="flex flex-wrap border-t px-10 py-3 lg:p-10"
        :class="`bg-${portfolioStore.primaryThemeBgDarker} border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
    >
        <div
            class="w-full border-b lg:w-1/3"
            :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
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
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    />
                </a>
                <span
                    class="inline-block p-2"
                    :class="`text-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
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
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    />
                </a>
                <span
                    class="inline-block p-2"
                    :class="`text-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
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
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    />
                </a>
                <span
                    class="inline-block p-2"
                    :class="`text-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
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
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    />
                </a>
                <span
                    class="inline-block p-2"
                    :class="`text-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
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
                        :class="`text-${portfolioStore.primaryThemeTextColour}`"
                    />
                </a>
            </p>
        </div>
        <div class="varela w-full py-6 text-center text-gray-400 sm:text-left lg:w-1/3 lg:py-0 lg:pt-2 lg:text-center">
            <h3 :class="`text-${portfolioStore.primaryThemeTextColour}`">&copy; James Dordoy</h3>
            <p class="my-2">{{ new Date().getFullYear() }}</p>
        </div>
        <div class="w-full lg:w-1/3">
            <div
                id="newsletter"
                class="border-b"
                :class="`border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
            >
                <NewsletterForm />
            </div>
        </div>
    </footer>
</template>
