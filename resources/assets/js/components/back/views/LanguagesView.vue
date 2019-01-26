<template>
    <div class="flex bg-nav flex-col">
        <back-nav>
        </back-nav>
        <button @click="createModal.show = !createModal.show" class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            Add Language
        </button>
        <languages-create-modal
            :show="createModal.show"
            @close="createModal.show = false">
        </languages-create-modal>
        <languages-table
            :languages="languages">
        </languages-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            languages: [],
            createModal: {
                show: false,
            }
        };
    },
    created() {
        axios.get('/api/languages')
        .then(response => {
            this.languages = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    },
    methods: {

    }
}
</script>

<style>

</style>
