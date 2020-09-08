<template>

    <div
        class="flex flex-wrap py-3 px-10 lg:p-10"
        :class="`bg-${$store.getters.primaryThemeBg}`">
        <div
            class="w-full lg:w-1/3 border-b border-b-2"
            :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
            <p class="mt-2">
                <a href="https://www.facebook.com/dordoy"  rel="noreferrer" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook']" class="text-4xl lg:text-5xl hover:text-blue-700" :class="`text-${$store.getters.primaryThemeTextColour}`" />
                </a>
                <span class="p-2 inline-block" :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">-</span>
                <a href="https://twitter.com/JDordoy" rel="noreferrer" target="_blank">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="text-4xl lg:text-5xl hover:text-blue-400" :class="`text-${$store.getters.primaryThemeTextColour}`" />
                </a>
                <span class="p-2 inline-block" :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">-</span>
                <a href="https://www.linkedin.com/in/james-dordoy-a80686110/" rel="noreferrer" target="_blank">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="text-4xl lg:text-5xl hover:text-blue-500" :class="`text-${$store.getters.primaryThemeTextColour}`" />
                </a>
                <span class="p-2 inline-block" :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">-</span>
                <a href="https://github.com/jamesdordoy" rel="noreferrer" target="_blank">
                    <font-awesome-icon :icon="['fab', 'github']" class="text-4xl lg:text-5xl hover:text-gray-500" :class="`text-${$store.getters.primaryThemeTextColour}`" />
                </a>
                <span class="p-2 inline-block" :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">-</span>
                <a href="https://jsfiddle.net/user/JamesDordoy/fiddles/" rel="noreferrer" target="_blank">
                    <font-awesome-icon :icon="['fab', 'jsfiddle']" class="text-4xl lg:text-5xl hover:text-yellow-500" :class="`text-${$store.getters.primaryThemeTextColour}`" />
                </a>
            </p>
        </div>
        <div class="w-full lg:w-1/3 lg:text-center py-6 lg:py-0 varela text-gray-400 lg:pt-2">
            <h4 :class="`text-${$store.getters.primaryThemeTextColour}`">&copy; James Dordoy</h4>
            <p>
                <router-link :to="'/privacy'">
                    <a class="teal-300 mt-4 block"
                       :class="`text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeLighter}`">Privacy Policy</a>
                </router-link>
            </p>
        </div>
        <div class="w-full lg:w-1/3">
            <div id="newsletter">
                <form @submit.prevent="submitNewsletterForm" action="/newsletter" method="POST">
                    <input type="hidden" name="_token" :value="csrfToken">
                    <div class="md:flex md:items-center pt-2">
                        <h4 class="md:text-right mb-1 md:mb-0 pr-4"
                            :class="`text-${$store.getters.primaryThemeTextColour}`">
                            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                            &nbsp;Newsletter Signup:
                        </h4>
                    </div>
                    <div class="md:flex md:items-center py-2">
                        <div class="md:w-full">
                            <div
                                class="flex items-center border-b pb-4"
                                :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    v-model="payload.email"
                                    aria-label="Email Address"
                                    class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    :class="`text-${$store.getters.primaryThemeTextColour}`">

                                <button
                                    @click="submitNewsletterForm"
                                    class="flex-shrink-0 bg-transparent text-sm border py-1 px-2 rounded" type="button"
                                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`">
                                    <font-awesome-icon :icon="['fas', 'check']" />
                                    Sign Up
                                </button>
                            </div>
                            <form-error :errors="checkError('email')"></form-error>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>

import FormErrors from '../../mixins/FormError';
import ContactService from '../../services/ContactService';
import RecaptureService from '../../services/RecaptureService';

export default {
    data: function(){
        return {
            payload: {
                email: '',
            },
        };
    },
    mixins: [FormErrors],
    props: {
        newsletterFormUrl: {
            type: String,
            default: "/",
        },
    },
    methods: {
        async submitNewsletterForm(){

            await this.$recaptchaLoaded()
            const token = await this.$recaptcha('newsletter_signup')
            const recaptureResponse = await RecaptureService.validateToken(token);

            if (recaptureResponse.data.success) {
                this.resetErrors();
            }

            const newsletterResponse = await ContactService.newsletterSignUp(this.payload).catch(error => {
                if (error.response.status === 400) {
                    this.$swal(`Oops`, `Something went wrong.`, `error`);
                }

                this.errors = error.response.data.errors;
            });

            if (newsletterResponse.status === 201) {
                await this.$swal(`Signup Received`, `Thank you!`, `success`);
                this.resetPayload();
            }
        },
        resetPayload() {
            this.payload = {
                email: '',
            };
        }
    },
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
    }
}
</script>
