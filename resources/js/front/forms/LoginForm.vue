<template>
    <div class="pin-none rounded p-8 text-white mt-20">
        <div class="w-full mx-auto">
            <form
                method="POST"
                action="/login"
                style="background: rgba(0, 0, 0, 0.4); text-shadow: 0px 0px 2px #131415;"
                class="border-teal-light border pin-none rounded p-8 mt-20 text-lg login-form">
                <input type="hidden" name="_token" :value="csrfToken">
                <div class="mb-4">
                    <label class="login-form-label" for="email">
                        Email
                    </label>
                    <input
                        id="email"
                        :value="oldEmail"
                        type="text"
                        name="email"
                        placeholder="example@gmail.com"
                        class="login-input focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-6">
                    <label class="login-form-label" for="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******************"
                        class="login-input focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-teal text-white font-bold py-2 px-4 rounded hover:bg-teal-dark focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                </div>
            </form>
            <p class="text-center text-grey text-xs">
                &copy; {{ year }} James Dordoy.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
        year() {
            return moment().format("Y");
        }
    },
    props: {
        oldEmail: {
            type: String,
            default: ""
        }
    }
}
</script>
