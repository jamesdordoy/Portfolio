<template>
    <div class="flex w-full mt-4">
        <div class="flex w-1/2">
            <div class="inline-block relative w-32">
                <select
                    class="input-generic focus:outline-none focus:bg-white"
                    @change="getData()"
                >
                    <option
                        v-for="(records, index) in perPage"
                        :key="index"
                        :value="records"
                    >
                        {{ records }}
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
                        pb-3
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
        </div>
        <div class="flex w-1/2 justify-end">
            <div class="flex w-1/2 justify-end"></div>
            <div class="flex w-1/2 justify-end">
                <text-input
                    name="name"
                    placeholder="Search Table"
                    @input="getData()"
                >
                </text-input>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tableData', 'perPage'],
    methods: {
        getData() {
            this.$emit('getData');
        },
    },
};
</script>
