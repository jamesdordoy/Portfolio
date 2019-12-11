<template>
    <div>
        <span
            id="blog"
            style="
                display: block;
                position: relative;
                top: -100px;
                visibility: hidden;">
        </span>
        <h2 class="varela text-center text-grey mb-8">What i've been up to</h2>

        <div class="flex flex-wrap -mx-2">
            <div v-for="post in posts.data" :key="post.id" class="md:w-1/2 lg:w-1/3 w-full mb-4 px-2">
                <div class="bg-nav p-4 border-b border-teal">
                    <div class="h-8">
                        <a href="#" class="text-blue"><h4>{{ post.title }}</h4></a>
                    </div>
                    <small>{{ post.subtitle }}</small>
                    <hr>
                    <div class="h-12">
                        <p class="text-grey-dark">{{ post.excerpt }}</p>
                    </div>
                    <hr>
                    <p class="text-grey-dark text-right">
                        Posted On: {{ post.created_at|formatDate("DD/MM/YYYY") }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>