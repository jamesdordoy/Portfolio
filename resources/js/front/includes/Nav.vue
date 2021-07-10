<template>
    <div class="font-sans antialiased">
        <nav
            class="front-nav lg:px-10 border-b"
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
                class="
                    animated
                    w-full
                    flex-grow
                    lg:flex lg:items-center lg:w-auto
                "
            >
                <div class="text-sm sm:flex-grow">
                    <router-link v-if="$route.path !== '/'" :to="'/'">
                        <a
                            class="front-nav-item lg:inline-block lg:mt-0"
                            :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeLighter}`"
                        >
                            Home
                        </a>
                    </router-link>
                    <a
                        v-else
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
                    <router-link v-show="!auth" :to="'/login'">
                        <a
                            class="
                                bg-transparent
                                font-semibold
                                py-1
                                px-3
                                border
                                hover:border-transparent
                                rounded
                                no-underline
                            "
                            :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`"
                        >
                            <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
                            Login
                        </a>
                    </router-link>
                    <router-link
                        v-show="auth"
                        :to="'/back'"
                        class="
                            bg-transparent
                            hover:bg-teal-500
                            text-teal-500
                            font-semibold
                            hover:text-nav
                            py-2
                            px-4
                            border
                            mr-4
                            border-teal-500
                            hover:border-transparent hover:text-black
                            rounded
                        "
                    >
                        <font-awesome-icon :icon="['fas', 'database']" />
                        Backend
                    </router-link>
                    <a
                        v-show="auth"
                        href="#"
                        class="
                            bg-transparent
                            hover:bg-teal-500
                            text-teal-500
                            font-semibold
                            hover:text-nav
                            py-2
                            px-4
                            border border-teal-500
                            hover:border-transparent hover:text-black
                            rounded
                        "
                        @click="logout"
                    >
                        <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                        Logout
                    </a>
                    <form
                        id="logout-form"
                        method="POST"
                        action="/logout"
                        class="hidden"
                    >
                        <input type="hidden" name="_token" :value="csrfToken" />
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
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
            return document.head.querySelector('meta[name="csrf-token"]')
                .content;
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
