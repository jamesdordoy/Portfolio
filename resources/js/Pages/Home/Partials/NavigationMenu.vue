<template>
    <div class="font-sans antialiased z-10">
        <nav
            class="front-nav bg-secondary lg:px-10 border-b"
            :class="`bg-${$store.getters.primaryThemeBg} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
        >
            <div class="flex items-center flex-no-shrink text-white mr-6">
                <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    class="fill-current h-8 w-8 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                >
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                    />
                </svg>
                <span
                    :class="`text-${$store.getters.primaryThemeTextColour}`"
                    class="font-semibold text-xl tracking-tight varela"
                    >James Dordoy</span
                >
            </div>
            <div class="block lg:hidden">
                <button
                    class="flex items-center px-3 py-2 border rounded"
                    :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeDarker} hover:border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeDarker}`"
                    @click="toggle"
                >
                    <svg
                        class="fill-current h-3 w-3"
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
                class="animated w-full flex-grow lg:flex lg:items-center lg:w-auto"
            >
                <div class="text-sm sm:flex-grow">
                    <a
                        v-scroll-to="'#home'"
                        class="front-nav-item lg:inline-block lg:mt-0"
                        :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        Home
                    </a>
                    <a
                        v-scroll-to="'#about'"
                        class="front-nav-item lg:inline-block lg:mt-0"
                        :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        About Me
                    </a>
                    <a
                        v-scroll-to="'#projects'"
                        class="front-nav-item lg:inline-block lg:mt-0"
                        :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        My Projects
                    </a>
                    <a
                        v-scroll-to="'#blog'"
                        class="front-nav-item lg:inline-block lg:mt-0"
                        :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        What I've Been Up To
                    </a>
                    <a
                        v-scroll-to="'#contact'"
                        class="front-nav-item lg:inline-block lg:mt-0"
                        :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeLighter}`"
                        @click="closeMenu"
                    >
                        Contact Me
                    </a>
                </div>
                <div class="my-2">
                    <Link
                        v-show="auth"
                        as="button"
                        href="/logout"
                        method="post"
                        class="bg-transparent font-semibold py-2 px-3 border hover:border-transparent no-underline"
                        :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`"
                    >
                        <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link,
    },
    props: {
        auth: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            open: false,
        };
    },
    computed: {
        csrfToken() {
            return null;
        },
    },
    methods: {
        logout() {
            document.getElementById('logout-form').submit();
        },
        toggle() {
            this.open = !this.open;
        },
        openMenu() {
            this.open = true;
        },
        closeMenu() {
            this.open = false;
        },
    },
};
</script>
