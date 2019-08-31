<template>
    <div>
        <div v-for="post in posts.data" :key="post.id" class="w-full rounded overflow-hidden shadow-lg bg-black mb-2">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                <p class="text-gray-700 text-base">
                {{ post.body }}
                </p>
            </div>
            <div class="px-6 py-4">
                <tag
                    name="PHP">
                </tag>
                <tag
                    name="Laravel">
                </tag>
                <tag
                    name="JavaScript">
                </tag>
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