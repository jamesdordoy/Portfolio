<template>
<div>
    <layout
        title="Dashboard">
        <span slot="buttons">
            <outline-button
                title="Add Language"
                classes="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            </outline-button>
        </span>
        <div slot="content">
            <div class="w-1/6">
                <tailwind-select
                    @change="selectChange"
                    :items="items">
                </tailwind-select>
            </div>
        </div>
    </layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            exampleModalShowing: false,
            item: {},
            items: [
                {
                    id: 1,
                    name: "James",
                },
                {
                    id: 2,
                    name: "Anthony",
                },
                {
                    id: 3,
                    name: "Terry",
                },
            ]
        }
    },
    methods: {
        selectChange(item) {
            console.log(item);
        }
    },
}
</script>

<style>

</style>
