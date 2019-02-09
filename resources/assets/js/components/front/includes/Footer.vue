<template>

    <div class="flex flex-wrap bg-footer p-10">
        <div class="w-full lg:w-1/3">
            <p>
                <a href="https://www.facebook.com/dordoy" target="_blank">
                    <i class="fa fa-facebook fa-2x text-white hover:text-blue"></i>
                </a>
                -
                <a href="https://twitter.com/JDordoy" target="_blank">
                    <i class="fa fa-twitter fa-2x text-white hover:text-blue-light"></i>
                </a>
                -
                <a href="https://plus.google.com/u/0/108820602359020977660" target="_blank">
                    <i class="fa fa-google-plus fa-2x text-white hover:text-red"></i>
                </a>
                -
                <a href="https://github.com/jamesdordoy" target="_blank">
                    <i class="fa fa-github fa-2x text-white hover:text-black"></i>
                </a>
                -
                <a href="https://jsfiddle.net/user/JamesDordoy/fiddles/" target="_blank">
                    <i class="fa fa-jsfiddle fa-2x text-white hover:text-yellow" aria-hidden="true"></i>
                </a>
            </p>
        </div>
        <div class="w-full lg:w-1/3 text-center varela text-white pt-2">
            <h4>&copy; James Dordoy</h4>
        </div>
        <div class="w-full lg:w-1/3">
            <div id="newsletter">
                <form action="/newsletter" method="POST">
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/2">
                            <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">
                                News Letter Signup
                            </label>
                        </div>
                        <div class="md:w-1/2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="jeff@example.com" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline">
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
