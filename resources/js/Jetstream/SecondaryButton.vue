<template>
    <button
        :type="type"
        class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition hover:text-gray-500 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800 disabled:opacity-25"
    >
        <slot></slot>
    </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'button',
        },
    },
})
</script>
