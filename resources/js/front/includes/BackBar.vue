<template>
    <div class="font-sans antialiased fixed top-0 left-0 right-0 z-10">
        <nav class="bg-secondary p-4 lg:px-10">
            <router-link :to="`/`" class="no-underline">
                <a class="text-blue-500 no-underline">
                    <h4 class="text-xl">&lt;&lt; Back</h4>
                </a>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
        };
    },
    props: {
        auth: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        logout() {
            document.getElementById('logout-form').submit();
        },
        toggle() {
            this.open = !this.open;
        },
        openMenu() {
            this.open = true;
        },
        closeMenu() {
            this.open = false;
        },
    },
    computed: {
        csrfToken() {
            return document.head.querySelector('meta[name="csrf-token"]')
                .content;
        },
    },
};
</script>
