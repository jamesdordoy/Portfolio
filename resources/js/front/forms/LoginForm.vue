<template>
    <div class="pin-none rounded p-8 text-white mt-20">
        <div class="w-full mx-auto">
            <form
                method="POST"
                action="/login"
                style="
                    background: rgba(0, 0, 0, 0.4);
                    text-shadow: 0px 0px 2px #131415;
                "
                class="border pin-none rounded p-8 mt-20 text-lg login-form"
                :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
            >
                <input type="hidden" name="_token" :value="csrfToken" />
                <div class="mb-4">
                    <label class="login-form-label" for="email"> Email </label>
                    <input
                        id="email"
                        :value="oldEmail"
                        type="text"
                        name="email"
                        placeholder="example@gmail.com"
                        class="
                            login-input
                            focus:outline-none focus:shadow-outline
                        "
                        :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`"
                    />
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
                        class="
                            login-input
                            focus:outline-none focus:shadow-outline
                        "
                        :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="
                            font-bold
                            py-2
                            px-4
                            rounded
                            border
                            focus:outline-none focus:shadow-outline
                        "
                        :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`"
                    >
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
import moment from 'moment';

export default {
    props: {
        oldEmail: {
            type: String,
            default: '',
        },
    },
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]')
                .content;
        },
        year() {
            return moment().format('Y');
        },
    },
};
</script>
