<template>
    <li>
        <router-link class="no-underline" :to="url">
            <a class="no-underline p-4 text-grey-dark border-b xl:border-0 hover:bg-grey-lightest xl:hover:bg-transparent xl:hover:text-blue ml-2">
                <i class="fa fa-github" aria-hidden="true"></i>
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
        },
    }
}
</script>

<style>

</style>
