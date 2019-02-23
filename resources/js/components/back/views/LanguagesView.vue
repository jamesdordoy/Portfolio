<template>
    <div class="">
        <back-nav>
        </back-nav>
        <div class="flex flex-col p-6 bg-black">
            <div class="flex w-full justify-end">
                <outline-button
                    @click="createModal.show = !createModal.show"
                    title="Add Language"
                    classes="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                </outline-button>
            </div>
            
            <div class="flex mt-4">
                <languages-table
                    :languages="languages">
                </languages-table>
            </div>

            <languages-create-modal
                :show="createModal.show"
                @close="createModal.show = false">
            </languages-create-modal>
        </div>
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
