<template>

    <div class="flex flex-wrap py-3 px-10 lg:p-10"
         :class="`bg-${$store.getters.primaryThemeBg}`">
        <div
            class="w-full lg:w-1/3 mt-2 border-b border-b-2 py-2"
            :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
            <p class="mt-4">
                <a href="https://www.facebook.com/dordoy" target="_blank">
                    <i class="fa fa-facebook text-4xl lg:text-5xl hover:text-blue-500" :class="`text-${$store.getters.primaryThemeTextColour}`"></i>
                </a>
                <span class="text-teal p-2 inline-block">-</span>
                <a href="https://twitter.com/JDordoy" target="_blank">
                    <i class="fa fa-twitter text-4xl lg:text-5xl hover:text-blue-200" :class="`text-${$store.getters.primaryThemeTextColour}`"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://www.linkedin.com/in/james-dordoy-a80686110/" target="_blank">
                    <i class="fa fa-linkedin text-4xl lg:text-5xl hover:text-blue-500" :class="`text-${$store.getters.primaryThemeTextColour}`" aria-hidden="true"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://github.com/jamesdordoy" target="_blank">
                    <i class="fa fa-github text-4xl lg:text-5xl hover:text-gray-900" :class="`text-${$store.getters.primaryThemeTextColour}`"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://jsfiddle.net/user/JamesDordoy/fiddles/" target="_blank">
                    <i class="fa fa-jsfiddle text-4xl lg:text-5xl hover:text-yellow-500" :class="`text-${$store.getters.primaryThemeTextColour}`" aria-hidden="true"></i>
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
                                    class="flex-shrink-0 bg-transparent text-sm border py-1 px-2 rounded" type="button"
                                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} text-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:text-${$store.getters.primaryThemeHoverTextColour}`">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>

import FormErrors from '../../mixins/FormError';

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
        submitNewsletterForm(){

            this.resetErrors();

            axios.post(this.newsletterFormUrl, this.payload)
            .then(response => {
                if (response.status == 200) {
                    this.$swal(`Signup Recived`, `Thank you!`, `success`);
                    this.resetPayload();
                }
            })
            .catch(error => {
                this.errors = error.response.data.errors;
            });
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
