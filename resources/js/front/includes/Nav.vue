<template>
    <div class="font-sans antialiased">
        <nav class="front-nav lg:px-10">
            <div class="flex items-center flex-no-shrink text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight text-white varela">James Dordoy</span>
            </div>
            <div class="block lg:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-500 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div :class="{'fadeIn ': open, 'hidden': !open}" class="animated w-full flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm sm:flex-grow">
                    <router-link v-if="this.$route.path !== '/'" :to="'/'">
                        <a class="front-nav-item lg:inline-block lg:mt-0 hover:text-teal-200">
                            Home
                        </a>
                    </router-link>
                    <a v-else v-scroll-to="'#home'" @click="closeMenu" class="front-nav-item lg:inline-block lg:mt-0 hover:text-teal-200">
                        Home
                    </a>
                    <a v-scroll-to="'#about'" @click="closeMenu" class="front-nav-item lg:inline-block lg:mt-0 hover:text-teal-200">
                        About Me
                    </a>
                    <a v-scroll-to="'#projects'" @click="closeMenu" class="front-nav-item lg:inline-block lg:mt-0 hover:text-teal-200">
                        My Projects
                    </a>
                    <a v-scroll-to="'#blog'" @click="closeMenu" class="front-nav-item lg:inline-block lg:mt-0 hover:text-teal-200">
                        What I've Been Up To
                    </a>
                    <a v-scroll-to="'#contact'" @click="closeMenu" class="front-nav-item lg:inline-block lg:mt-0 hover:text-teal-200">
                        Contact Me
                    </a>
                </div>
                <div class="my-2">
                    <router-link v-show="!auth" :to="'/login'">
                        <a class="bg-transparent hover:bg-teal-600 text-teal-500 font-semibold hover:text-black py-1 px-3 border border-teal-500 hover:border-transparent rounded no-underline">
                            <i class="fa fa-sign-in" aria-hidden="true"></i>
                            Login
                        </a>
                    </router-link>
                    <router-link v-show="auth" :to="'/back'" class="bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-nav py-2 px-4 border mr-4 border-teal-500 hover:border-transparent hover:text-black rounded">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        Backend
                    </router-link>
                    <a v-show="auth" href="#" @click="logout" class="bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-nav py-2 px-4 border border-teal-500 hover:border-transparent hover:text-black rounded">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        Logout
                    </a>
                    <form method="POST" id="logout-form" action="/logout" class="hidden">
                        <input type="hidden" name="_token" :value="csrfToken">
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    data() {
        return {
            open: false,
        }
    },
    props: {
        auth: {
            type: Object,
            default: () => ({}),
        }
    },
    methods: {
        logout() {
            document.getElementById('logout-form').submit();
        },
        toggle() {
            this.open = !this.open
        },
        openMenu() {
            this.open = true;
        },
        closeMenu() {
            this.open = false;
        }
    },
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
    },
}
</script>
