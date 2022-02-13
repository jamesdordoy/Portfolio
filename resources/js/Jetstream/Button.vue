<template>
    <template v-if="href">
        <Link :target="target" :href="href" :class="classes" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
            <slot />
        </Link>
    </template>
    <template v-else>
        <button :type="type" :class="classes" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
            <slot />
        </button>
    </template>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Link } from '@inertiajs/inertia-vue3';

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
        }
    })
</script>
