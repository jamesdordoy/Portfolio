<template>
    <div class="container">
        <img v-if="src.length" :src="src">
        <div class="placeholder" v-else>
            <i class="fa fa-picture-o" aria-hidden="true"></i>
        </div>
    </div>
</template>
<style scoped>

.container {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px 0;
    max-height: 200px;
}

.container img {
    height: 100%;
    max-width: 100%;
    display: block;
    margin: auto;
}

.placeholder {
    font-size: 8em;
    text-align: center;
}

</style>
<script>

export default {
    data() {
        return {
            files: [],
        };  
    },
    props: {
        value: {
            type: String,
            default: '',
        },
        src: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
    },
    methods: {
        emitChange(event) {
            this.$emit("change", event.target.files)
        },
    },
}

</script>

<style>

</style>
