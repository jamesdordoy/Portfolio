<template>
    <form @submit.prevent="submitContactForm" :method="method" :action="url" class="w-full">
        <input type="hidden" name="_token" :value="csrfToken">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0 ">
                <div
                    class="border-b border-b-2"
                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2"
                        :class="`text-${$store.getters.primaryThemeTextColour}`">
                    Name:
                </label>
                <input
                    type="text"
                    v-model="payload.name"
                    name="name"
                    placeholder="John Smith"
                    :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`"
                    class="appearance-none block w-full py-3 px-4 leading-tight focus:outline-none">
                </div>
                <form-error :errors="checkError('name')"></form-error>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <div
                    class="border-b border-b-2"
                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2"
                           :class="`text-${$store.getters.primaryThemeTextColour}`">
                    Email:
                    </label>
                    <input
                        name="email"
                        type="email"
                        v-model="payload.email"
                        class="appearance-none block w-full py-3 px-4 leading-tight focus:outline-none"
                        :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`"
                        placeholder="john@example.com">
                </div>
                <form-error :errors="checkError('email')"></form-error>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <div
                    class="border-b border-b-2"
                    :class="`border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2"
                           :class="`text-${$store.getters.primaryThemeTextColour}`">
                    Message:
                    </label>
                    <textarea
                        rows="10"
                        name="message"
                        v-model="payload.message"
                        placeholder="Hello, World!"
                        class="appearance-none block w-full py-3 px-4 leading-tight focus:outline-none"
                        :class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`">
                    </textarea>
                </div>
                <form-error :errors="checkError('message')"></form-error>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 pl-3">
            <outline-button
                type="submit"
                classes="hover:text-nav"
                title="Submit">
                <i class="fa fa-check" aria-hidden="true"></i>
            </outline-button>
        </div>
    </form>
</template>
<script>

    import FormErrors from '../../mixins/FormError';

    export default{
        data: function(){
            return {
                list: '',
                payload: {
                    name: '',
                    email: '',
                    message: '',
                },
            };
        },
        mixins: [FormErrors],
        props: {
            url: {
                type: String,
                default: "/"
            },
            method: {
                type: String,
                default: "GET"
            }
        },
        methods: {
            submitContactForm(){

                this.resetErrors();

                axios.post(this.url, this.payload)
                .then(response => {
                    if (response.status == 200) {
                        this.$swal(`Message Received`, `Thank you ${ this.payload.name }`, `success`);
                        this.resetPayload();
                    }
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
            },
            resetPayload() {
                this.payload = {
                    name: '',
                    email: '',
                    message: '',
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
