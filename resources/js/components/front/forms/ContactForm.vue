<template>
    <form :method="method" :action="url" class="w-full py-8 pl-6">
        <input type="hidden" name="_token" :value="csrfToken">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Name:
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Email:
                </label>
                <input
                    name="email"
                    type="email"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    placeholder="john@example.com">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Message:
                </label>
                <textarea
                    rows="10"
                    name="message"
                    placeholder="Hello, World!"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey">
                </textarea>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6 pl-3">
            <outline-button
                type="submit"
                classes="hover:text-nav"
                title="Submit">
            </outline-button>
        </div>
    </form>
</template>
<script>
    export default{
        data: function(){
            return {
                list: '',
            };
        },
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
        computed: {
            csrfToken() {
                return document.head.querySelector('meta[name="csrf-token"]').content;
            },
        }
    }
</script>