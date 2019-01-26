<template>
    <li>
        <router-link :to="url">
            <a class="no-underline text-grey-dark border-b xl:border-0 hover:bg-grey-lightest xl:hover:bg-transparent xl:hover:text-blue ml-2">
                {{ text }}
            </a>
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
        },
        text: {
            type: String,
        }
    }
}
</script>

<style>

</style>
