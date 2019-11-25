<template>
    <section class="flex content-start">
      
      <div class="twitter-feed w-full">
        <div class="flex" v-for="tweet in tweets" :key="tweet.id">
            <div class="px-2 pt-2 flex-grow">
                <header>
                    <a href="#" class="text-teal no-underline">
                        <span class="font-medium">
                            {{ tweet.user.name }}
                        </span>
                        <span class="font-normal text-grey">@{{ tweet.user.screen_name }}</span>
                    </a>
                    <div class="text-xs text-grey flex items-center my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1 feather feather-calendar">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>{{ tweet.created_at|format-moment-dd/mm/yyyy }}</span>
                    </div>
                </header>
                <article class="py-4 text-grey border-b border-teal">
                {{ tweet.text }}
                </article>
                <!-- <footer class="text-sm flex">
                    <a href="#" class="block no-underline text-blue flex px-4 py-2 items-center hover:bg-blue hover:text-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <span>Liked</span>
                    </a>
                    <a href="#" class="block no-underline text-grey flex px-4 py-2 items-center hover:bg-grey hover:text-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle h-6 w-6 mr-1">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span>Reply</span>
                    </a>
                </footer> -->
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default{
    props: {
        tweets: {
            type: Array,
            default: []
        },
    },
    created() {

    }
}
</script>

<style>
.twitter-feed{
    max-height: 600px;
    overflow-y: scroll;
}



</style>