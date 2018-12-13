<template>
    <div class="h-full bg-nav">
        <particles>
            <div class="pin-none rounded p-8 text-center text-white mt-20">
                <div class="w-full mx-auto">
                    <form method="POST" action="/login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-teal border">
                        <input type="hidden" name="_token" :value="csrfToken">
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" name="email">
                        </div>
                        <div class="mb-6">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************">
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Sign In
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-teal hover:text-teal-darker" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p class="text-center text-grey text-xs">
                        ©2018 James Dordoy.
                    </p>
                </div>
            </div>
        </particles>
    </div>
</template>

<script>
export default {
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
    }
}
</script>