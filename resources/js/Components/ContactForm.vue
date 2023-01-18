<template>
    <form
        :method="method"
        :action="url"
        class="w-full"
        @submit.prevent="submitContactForm"
    >
        <input
            type="hidden"
            name="_token"
            :value="csrfToken"
        />
        <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0">
                <div
                    class="border-b border-b-2"
                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_name"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                    >
                        Name:
                    </label>
                    <input
                        id="contact_name"
                        v-model="payload.name"
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`"
                        class="block w-full appearance-none py-3 px-4 leading-tight focus:outline-none"
                    />
                </div>
            </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0">
                <div
                    class="border-b border-b-2"
                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_email"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                    >
                        Email:
                    </label>
                    <input
                        id="contact_email"
                        v-model="payload.email"
                        name="email"
                        type="email"
                        class="block w-full appearance-none py-3 px-4 leading-tight focus:outline-none"
                        :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`"
                        placeholder="john@example.com"
                    />
                </div>
            </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="w-full px-3">
                <div
                    class="border-b border-b-2"
                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                >
                    <label
                        for="contact_message"
                        class="mb-2 block text-xs font-bold uppercase tracking-wide"
                        :class="`text-${$store.getters.primaryThemeTextColour}`"
                    >
                        Message:
                    </label>
                    <textarea
                        id="contact_message"
                        v-model="payload.message"
                        rows="10"
                        name="message"
                        placeholder="Hello, World!"
                        class="block w-full appearance-none py-3 px-4 leading-tight focus:outline-none"
                        :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`"
                    >
                    </textarea>
                </div>
            </div>
        </div>
        <div class="-mx-3 flex flex-wrap pl-3">
            <button
                type="submit"
                data-sitekey="6LeNtMYZAAAAAMfF8SBN1RijJJOyhu80ZxkZpSkk"
                data-callback="checkToken"
                data-action="submit"
                class="g-recaptcha flex-shrink-0 rounded border bg-transparent py-1 px-2 text-sm"
                :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`"
            >
                <font-awesome-icon :icon="['fas', 'check']" />
                Submit
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: '/',
        },
        method: {
            type: String,
            default: 'GET',
        },
    },
    data() {
        return {
            list: '',
            payload: {
                name: '',
                email: '',
                message: '',
            },
        }
    },
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]').content
        },
    },
    methods: {
        async submitContactForm() {
            await this.$recaptchaLoaded()
            const token = await this.$recaptcha('contact_me')
            const recaptureResponse = await RecaptureService.validateToken(token)
            if (recaptureResponse.data.success) {
                this.resetErrors()
                // submit here nerd
                if (contactResponse.status === 201) {
                    await this.$swal(`Message Received`, `Thank you ${this.payload.name}`, `success`)
                    this.resetPayload()
                }
            }
        },
        resetPayload() {
            this.payload = {
                name: '',
                email: '',
                message: '',
            }
        },
    },
}
</script>
