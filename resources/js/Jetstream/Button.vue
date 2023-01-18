<template>
    <template v-if="href">
        <Link
            :target="target"
            :href="href"
            :class="classes"
            class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-700 focus:border-gray-900 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-900 disabled:opacity-25"
        >
            <slot />
        </Link>
    </template>
    <template v-else>
        <button
            :type="type"
            :class="classes"
            class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-700 focus:border-gray-900 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-900 disabled:opacity-25"
        >
            <slot />
        </button>
    </template>
</template>

<script>
import { defineComponent } from 'vue'
import { Link } from '@inertiajs/vue3'

export default defineComponent({
    components: {
        Link,
    },
    props: {
        type: {
            type: String,
            default: 'submit',
        },
        classes: {
            type: String,
        },
        href: {
            type: String,
            default: '',
        },
        target: {
            default: '',
        },
    },
})
</script>
