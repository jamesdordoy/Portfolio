<template>
    <div class="relative">
        <select
            class="input-generic focus:outline-none focus:bg-white"
            @change="onChange"
        >
            <option
                v-for="(item, index) in items"
                :key="index"
                :value="item[valueLabel]"
            >
                {{ item[label] }}
            </option>
        </select>
        <div
            class="
                pointer-events-none
                absolute
                pin-y pin-r
                flex
                items-center
                px-2
                text-grey-darker
            "
        >
            <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: [Array, Object],
            default: () => [],
        },
        label: {
            type: String,
            default: 'name',
        },
        valueLabel: {
            type: String,
            default: 'id',
        },
    },
    methods: {
        onChange(event) {
            this.$emit('change', event.target.value);
        },
    },
};
</script>

<style></style>
