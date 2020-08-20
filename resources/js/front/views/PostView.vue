<template>
    <div class="h-full bg-nav relative">
        <back-bar :auth="auth">
        </back-bar>
        <particles :width="50">

            <div v-if="loading" class="loading">
                <div style="background: rgba(0, 0, 0, 0.4); text-shadow: 0px 0px 2px #131415;" class="border-teal-500 border pin-none rounded py-4 px-8 mt-48 text-lg text-white">
                    <h1>Loading...</h1>
                </div>
            </div>

            <div v-if="errors" class="error">
                {{ errors }}
            </div>

            <div v-if="post" class="content">
                <div class="border-teal-500 border bg-secondary pin-none rounded py-4 px-8 mt-48 text-lg text-white">
                    <h1 class="text-3xl mb-4">{{ post.title }}</h1>
                    <p class="varela">
                        {{ post.subtitle }}
                    </p>
                    <hr class="my-1">
                    <p class="varela" v-html="post.body">
                    </p>
                    <br>
                    <p class="varela text-right">
                        Posted On: {{ post.created_at|formatDate("DD/MM/YYYY") }}
                    </p>
                </div>
            </div>
        </particles>
    </div>
</template>

<script>

import IndexService from '../../services/IndexService';

export default {
    data() {
        return {
            post: {},
            loading: null,
            errors: null,
        };
    },
    created() {
        this.getPost(this.$route.params.id);
    },
    props: {
        auth: {
          type: Object,
          default: () => ({})
        }
    },
    methods: {
        getPost(id) {
            IndexService.post(id)
            .then(response => {
                this.post = response.data.data;
                this.loading = false;
            })
            .catch(error => {
                this.errors = error;
            });
        }
    }
}
</script>
