<template>
    <nav v-if="!client" class="flex mt-4">
        <div class="w-1/2">
            <span class="text-white">
                Showing {{ meta.from }} to {{ meta.to }} of
                {{ meta.total }} Entries
            </span>
        </div>
        <div class="flex w-1/2 justify-end">
            <button
                :disabled="!links.prev"
                :class="{
                    'opacity-50': !links.prev,
                    'cursor-not-allowed': !links.prev,
                }"
                class="
                    text-grey-lighter
                    font-bold
                    py-2
                    px-4
                    rounded
                    text-xs
                    bg-teal
                    hover:bg-teal-dark
                    mr-2
                "
                @click="$emit('prev', links.prev)"
            >
                Prev
            </button>
            <button
                :disabled="!links.next"
                :class="{
                    'opacity-50': !links.next,
                    'cursor-not-allowed': !links.next,
                }"
                class="
                    text-grey-lighter
                    font-bold
                    py-2
                    px-4
                    rounded
                    text-xs
                    bg-teal
                    hover:bg-teal-dark
                "
                @click="$emit('next', links.next)"
            >
                Next
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        meta: {
            default: () => ({}),
        },
        links: {
            default: () => ({}),
        },
        client: {},
        filtered: {},
    },
};
</script>
