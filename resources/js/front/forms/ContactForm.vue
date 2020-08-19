<template>
    <form @submit.prevent="submitContactForm" :method="method" :action="url" class="w-full">
        <input type="hidden" name="_token" :value="csrfToken">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0 ">
                <div class="border-b border-b-2 border-teal">
                    <label class="block uppercase tracking-wide text-grey text-xs font-bold mb-2">
                    Name:
                </label>
                <input
                    type="text"
                    v-model="payload.name"
                    name="name"
                    placeholder="John Smith"
                    class="appearance-none block w-full bg-nav text-grey py-3 px-4 leading-tight focus:outline-none focus:bg-black">
                </div>
                <form-error :errors="checkError('name')"></form-error>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <div class="border-b border-b-2 border-teal">
                    <label class="block uppercase tracking-wide text-grey text-xs font-bold mb-2">
                    Email:
                    </label>
                    <input
                        name="email"
                        type="email"
                        v-model="payload.email"
                        class="appearance-none block w-full bg-nav text-grey py-3 px-4 leading-tight focus:outline-none focus:bg-black"
                        placeholder="john@example.com">
                </div>
                <form-error :errors="checkError('email')"></form-error>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <div class="border-b border-b-2 border-teal">
                    <label class="block uppercase tracking-wide text-grey text-xs font-bold mb-2">
                    Message:
                    </label>
                    <textarea
                        rows="10"
                        name="message"
                        v-model="payload.message"
                        placeholder="Hello, World!"
                        class="appearance-none block w-full bg-nav text-grey py-3 px-4 leading-tight focus:outline-none focus:bg-black">
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
