<template>
    <div class="flex bg-nav flex-col">
        <back-nav>
        </back-nav>
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
        };
    },
    created() {
        axios.get('/api/github')
        .then(response => {
            // handle success
            this.languages = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
}
</script>

<style>

</style>
