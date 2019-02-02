<template>
    <div class="bg-nav flex w-full">
        <div class="container mx-auto px-4 relative">
            <div class="flex items-center md:justify-between py-4">
                <div class="w-1/6 md:hidden">
                    <svg class="fill-current text-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z"></path></svg>
                </div>
                <div class="w-1/6 md:w-auto text-center text-white text-2xl font-medium">
                    Backend
                </div>
                <div class="w-1/6 md:w-auto text-white font-medium">
                    <ul class="list-reset flex">
                        <back-nav-link
                            :url="'/back'"
                            :text="'Dash'">
                        </back-nav-link>
                        <back-nav-link
                            :url="'/back/github'"
                            :text="'GitHub'">
                        </back-nav-link>
                        <back-nav-link
                            :url="'/back/languages'"
                            :text="'Languages'">
                        </back-nav-link>
                        <a href="https://server.jamesdordoy.co.uk/goaccess" target="_blank" class="no-underline text-grey-dark border-b xl:border-0 hover:bg-grey-lightest xl:hover:bg-transparent xl:hover:text-blue ml-2">
                            Server Statistics
                        </a>
                    </ul>
                </div>
                <div class="w-1/6 md:w-auto md:flex text-right">
                    <div>
                        <img class="inline-block h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/19800113?s=400&u=d1353fc02ae27265ad97d7444340aec9979c9ec0&v=4" alt="">
                    </div>
                    <div class="hidden md:block md:flex md:items-center ml-2">
                        <span class="text-white text-sm mr-1">James Dordoy</span>
                        <div @click="dropdown = !dropdown">
                            <svg  class="fill-current text-white h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"></path></svg>
                        </div>
                    </div>
                </div>
                <div class="absolute dropdown p-6 bg-nav" :class="{ 'hidden': !dropdown }">
                    <a href="/" class="no-underline text-grey-dark border-b xl:border-0 hover:bg-grey-lightest xl:hover:bg-transparent xl:hover:text-blue">
                        Home
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropdown: false,
        }
    }
}
</script>

<style scoped>
.dropdown {
    top: 100px;
    right: 10px;
}

</style>
