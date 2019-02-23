<template>

    <div class="flex flex-wrap bg-black p-10">
        <div class="w-full lg:w-1/3 mt-2 border-b border-b-2 border-teal">
            <p class="mt-4">
                <a href="https://www.facebook.com/dordoy" target="_blank">
                    <i class="fa fa-facebook fa-3x text-white hover:text-blue"></i>
                </a>
                <span class="text-teal p-2 inline-block">-</span>
                <a href="https://twitter.com/JDordoy" target="_blank">
                    <i class="fa fa-twitter fa-3x text-white hover:text-blue-light"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://plus.google.com/u/0/108820602359020977660" target="_blank">
                    <i class="fa fa-google-plus fa-3x text-white hover:text-red"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://github.com/jamesdordoy" target="_blank">
                    <i class="fa fa-github fa-3x text-white hover:text-grey-dark"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://jsfiddle.net/user/JamesDordoy/fiddles/" target="_blank">
                    <i class="fa fa-jsfiddle fa-3x text-white hover:text-yellow" aria-hidden="true"></i>
                </a>
            </p>
        </div>
        <div class="w-full lg:w-1/3 lg:text-center sm:py-6 lg:py-0 varela text-white lg:pt-2">
            <h4>&copy; James Dordoy</h4>
            <p><a class="text-teal hover:text-teal-lighter mt-4 block" href="/privacy">Privacy Policy</a></p>
        </div>
        <div class="w-full lg:w-1/3">
            <div id="newsletter">
                <form action="/newsletter" method="POST">
                    <div class="md:flex md:items-center  pt-2">
                        <h4 class="text-white md:text-right mb-1 md:mb-0 pr-4">News Letter Signup</h4>
                    </div>
                    <div class="md:flex md:items-center">

                        <div class="md:w-full">
                            <form class="w-full">
                                <div class="flex items-center border-b border-b-2 border-teal py-2">
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        aria-label="Email"
                                        class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none">
                                    <button class="flex-no-shrink bg-transparent hover:bg-teal text-teal font-semibold hover:text-nav py-2 px-4 border mr-4 border-teal hover:border-transparent rounded" type="button">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
