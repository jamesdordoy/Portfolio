<template>

    <div class="flex flex-wrap bg-black py-3 px-10 lg:p-10">
        <div class="w-full lg:w-1/3 mt-2 border-b border-b-2 border-teal py-2">
            <p class="mt-4">
                <a href="https://www.facebook.com/dordoy" target="_blank">
                    <i class="fa fa-facebook text-4xl lg:text-5xl text-grey-darker hover:text-blue"></i>
                </a>
                <span class="text-teal p-2 inline-block">-</span>
                <a href="https://twitter.com/JDordoy" target="_blank">
                    <i class="fa fa-twitter text-4xl lg:text-5xl text-grey-darker hover:text-blue-light"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://www.linkedin.com/in/james-dordoy-a80686110/" target="_blank">
                    <i class="fa fa-linkedin text-4xl lg:text-5xl text-grey-darker hover:text-blue" aria-hidden="true"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://github.com/jamesdordoy" target="_blank">
                    <i class="fa fa-github text-4xl lg:text-5xl text-grey-darker hover:text-grey-dark"></i>
                </a>
                <span class="text-teal p-2">-</span>
                <a href="https://jsfiddle.net/user/JamesDordoy/fiddles/" target="_blank">
                    <i class="fa fa-jsfiddle text-4xl lg:text-5xl text-grey-darker hover:text-yellow" aria-hidden="true"></i>
                </a>
            </p>
        </div>
        <div class="w-full lg:w-1/3 lg:text-center py-6 lg:py-0 varela text-grey lg:pt-2">
            <h4>&copy; James Dordoy</h4>
            <p>
                <router-link :to="'/privacy'">
                    <a class="text-teal hover:text-teal-lighter mt-4 block">Privacy Policy</a>
                </router-link>
            </p>
        </div>
        <div class="w-full lg:w-1/3">
            <div id="newsletter">
                <form @submit.prevent="submitNewsletterForm" action="/newsletter" method="POST">
                    <input type="hidden" name="_token" :value="csrfToken">
                    <div class="md:flex md:items-center pt-2">
                        <h4 class="text-grey md:text-right mb-1 md:mb-0 pr-4">
                            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                            &nbsp;Newsletter Signup:
                        </h4>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-full">
                            <div class="flex items-center border-b border-b-2 border-teal py-4">
                                <input
                                    type="email"
                                    name="email"
                                    v-model="payload.email"
                                    placeholder="john@example.com"
                                    aria-label="Email"
                                    class="appearance-none rounded bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none">
                                <button type="submit" class="flex-no-shrink bg-transparent hover:bg-teal text-teal font-semibold hover:text-nav py-2 px-4 border mr-4 border-teal hover:border-transparent rounded">
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
