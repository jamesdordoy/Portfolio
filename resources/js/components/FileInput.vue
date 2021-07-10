<template>
    <label
        class="
            w-64
            flex flex-col
            items-center
            px-2
            py-4
            bg-white
            text-blue
            rounded-lg
            shadow-lg
            tracking-wide
            uppercase
            border border-blue
            cursor-pointer
            hover:bg-blue hover:text-white
        "
    >
        <svg
            class="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
            ></path>
        </svg>
        <span class="mt-2 text-base leading-normal">Select a file</span>
        <input
            type="file"
            :multiple="multiple"
            :name="name"
            class="hidden"
            @change="emitChange($event)"
        />
    </label>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
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
        multiple: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            files: [],
        };
    },
    methods: {
        emitChange(event) {
            const files = this.multiple
                ? event.target.files
                : event.target.files[0];
            this.$emit('change', files);
        },
    },
};
</script>

<style></style>
