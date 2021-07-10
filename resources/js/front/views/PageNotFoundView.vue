<template>
    <div class="h-full bg-nav">
        <particles :width="50">
            <div
                style="
                    background: rgba(0, 0, 0, 0.4);
                    text-shadow: 0px 0px 2px #131415;
                "
                class="
                    border-teal-light border
                    pin-none
                    rounded
                    py-4
                    px-8
                    mt-40
                    text-lg text-white
                "
            >
                <p class="varela text-5xl text-center">404</p>
                <p class="varela text-3xl text-center">Page Not Found..</p>
            </div>
        </particles>
    </div>
</template>

<script>
export default {
    props: {
        auth: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>
