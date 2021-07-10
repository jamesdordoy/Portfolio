<template>
    <div>
        <span id="blog" class="jd-bookmark"> </span>
        <h2
            class="text-3xl text-center varela mb-8"
            :class="`text-${$store.getters.primaryThemeTextColour}`"
        >
            What i've been up to
        </h2>

        <div class="flex flex-wrap -mx-2">
            <div
                v-for="post in posts.data"
                :key="post.id"
                class="md:w-1/2 lg:w-1/3 w-full mb-4 px-2"
            >
                <div
                    class="p-4 border-b"
                    :class="`bg-${$store.getters.primaryThemeBgLighter} border-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
                >
                    <div class="h-8 mb-2">
                        <router-link
                            :to="`/post/${post.id}`"
                            class="
                                underline
                                hover:no-underline
                                text-blue-500
                                visited:text-green-500
                            "
                        >
                            <a class=""
                                ><h4>{{ post.title }}</h4></a
                            >
                        </router-link>
                    </div>

                    <div class="h-12 mb-2">
                        <p
                            :class="`text-${$store.getters.primaryThemeTextColour}`"
                            v-html="post.excerpt"
                        ></p>
                    </div>

                    <div class="flex flex-wrap">
                        <div class="w-1/2">
                            <small
                                :class="`text-${$store.getters.primaryThemeTextColour}`"
                                >{{ post.subtitle }}</small
                            >
                        </div>
                        <div class="w-1/2">
                            <small
                                class="float-right"
                                :class="`text-${$store.getters.primaryThemeTextColour}`"
                            >
                                Posted On:
                                {{ post.created_at | formatDate('DD/MM/YYYY') }}
                            </small>
                        </div>
                    </div>
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
            default: () => ({}),
        },
    },
};
</script>
