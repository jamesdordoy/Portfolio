
<template>
    <layout
        title="Blog">
        <span slot="buttons">
            <outline-button
                title="Add a Post">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </outline-button>
        </span>
        <div slot="content">
            <posts
                :posts="posts">
            </posts>
        </div>
    </layout>
</template>

<script>
    import PostService from '../../services/PostService';
    export default {
        data() {
            return {
                posts: {},
            }
        },
        created() {
            this.getPosts();
        },
        methods: {
            getPosts() {
                PostService.all()
                .then(response => {
                    this.posts = response.data;
                })
                .catch(error => {

                })
            }
        }
    }
</script>
