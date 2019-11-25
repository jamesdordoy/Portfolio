<template>
    <div class="font-sans antialiased">
        <nav class="flex items-center justify-between flex-wrap py-3 px-10 bg-black fixed">
            <div class="flex items-center flex-no-shrink text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight text-white varela">James Dordoy</span>
            </div>
            <div class="block lg:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div :class="{'fadeIn ': open, 'hidden': !open}" class="animated w-full flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm sm:flex-grow">
                    <a href="/" class="no-underline block py-4 mt-4 uppercase md:inline-block md:w-full lg:w-auto lg:mt-0 text-teal hover:text-teal-lighter mr-4 cursor">
                        Home
                    </a>
                    <a href="/#about" class="block uppercase py-4  no-underline lg:inline-block lg:mt-0 text-teal hover:text-teal-lighter mr-4 cursor">
                        About Me
                    </a>
                    <a href="/#projects" class="block uppercase py-4  no-underline lg:inline-block lg:mt-0 text-teal hover:text-teal-lighter mr-4 cursor">
                        Projects
                    </a>
                    <a href="/#languages" class="block uppercase py-4  no-underline lg:inline-block lg:mt-0 text-teal hover:text-teal-lighter mr-4 cursor">
                        Languages &amp; Frameworks
                    </a>
                    <a href="/#contact" class="block uppercase py-4  no-underline lg:inline-block lg:mt-0 text-teal hover:text-teal-lighter mr-4 cursor">
                        Contact
                    </a>
                </div>
                <div class="lg:mt-0 mt-6 ">
                    <a v-show="!auth" href="/login" class="bg-transparent hover:bg-teal text-teal font-semibold hover:text-nav py-1 px-3 border border-teal hover:border-transparent rounded no-underline">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        Login
                    </a>
                    <a v-show="auth" href="/back" class="bg-transparent hover:bg-teal text-teal font-semibold hover:text-nav py-2 px-4 border mr-4 border-teal hover:border-transparent rounded">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        Backend
                    </a>
                    <a v-show="auth" href="#" @click="logout" class="bg-transparent hover:bg-teal text-teal font-semibold hover:text-nav py-2 px-4 border border-teal hover:border-transparent rounded">
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
    props: ['auth'],
    data() {
        return {
            open: false,
        }
    },
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
    },
    methods: {
        logout() {
            document.getElementById('logout-form').submit();
        },
        toggle() {
            this.open = !this.open
        },
    },
}


</script>

<style scoped>
nav {
    top: 0;
    right: 0;
    left: 0;
    z-index: 255;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
