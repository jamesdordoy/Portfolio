<template>
    <div class="flex flex-wrap -mx-2">
        <div v-for="post in posts.data" :key="post.id" class="md:w-1/2 lg:w-1/3 w-full mb-4 px-2">
            <div class="bg-nav p-4 border-b border-teal">
                <div class="h-8">
                    <h4 class="text-grey-dark">{{ post.title }}</h4>
                </div>
                <small>{{ post.subtitle }}</small>
                <hr>
                <div class="h-12">
                    <p class="text-grey-dark">{{ post.excerpt }}</p>
                </div>
                <hr>
                <p class="text-grey-dark text-right">Posted On: {{ post.created_at|formatDate("DD/MM/YYYY") }}</p>
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