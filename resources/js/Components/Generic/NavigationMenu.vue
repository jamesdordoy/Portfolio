<script lang="ts" setup>

import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore();

const open = ref<boolean>(false);

const toggle = () => {
    open.value = !open.value;
}
const openMenu = () => {
    open.value = true;
}
const closeMenu = () => {
    open.value = false;
}

</script>

<template>
    <div class="z-10 font-sans antialiased">
        <nav
            class="front-nav border-b lg:px-10"
            :class="`bg-${store.getters.primaryThemeBgDarker} border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
        >
            <div class="flex-no-shrink mr-6 flex items-center text-white">
                <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    class="mr-2 h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade}`"
                >
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                    />
                </svg>
                <span
                    :class="`text-white`"
                    class="varela text-xl font-semibold tracking-tight"
                    >James Dordoy</span
                >
            </div>
            <div class="block lg:hidden">
                <button
                    class="flex items-center rounded border px-3 py-2"
                    :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:bg-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShadeDarker} hover:border-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShadeDarker}`"
                    @click="toggle"
                >
                    <svg
                        class="h-3 w-3 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                :class="{ 'fadeIn ': open, hidden: !open }"
                class="animated w-full flex-grow lg:flex lg:w-auto lg:items-center"
            >
                <div class="text-sm sm:flex-grow">
                    <a
                        v-scroll-to="'#home'"
                        class="front-nav-item lg:mt-0 lg:inline-block"
                        :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        Home
                    </a>
                    <a
                        v-scroll-to="'#about'"
                        class="front-nav-item lg:mt-0 lg:inline-block"
                        :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        About Me
                    </a>
                    <a
                        v-scroll-to="'#projects'"
                        class="front-nav-item lg:mt-0 lg:inline-block"
                        :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        My Projects
                    </a>
                    <a
                        v-scroll-to="'#blog'"
                        class="front-nav-item lg:mt-0 lg:inline-block"
                        :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        What I've Been Up To
                    </a>
                    <a
                        v-scroll-to="'#contact'"
                        class="front-nav-item lg:mt-0 lg:inline-block"
                        :class="`text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShade} hover:text-${store.getters.primaryThemeColour}-${store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>

