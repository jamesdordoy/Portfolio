<template>
    <div class="flex justify-center w-full">
        <table class="text-left w-full">
            <thead class="bg-grey-darkest text-grey-dark text-white w-full">
                <tr class="flex w-full text-grey-dark">
                    <th class="p-2 w-1/3">Name</th>
                    <th class="p-2 w-1/3">Owner</th>
                    <th class="p-2 w-1/3">Private</th>
                </tr>
            </thead>
            <tbody class="flex flex-col items-center justify-between w-full text-grey-light border-l border-r border-b border-grey-darkest rounded-b bg-nav">
                <tr v-for="repository in repositories" :key="repository.id" class="flex w-full mb-4">
                    <td class="p-2 w-1/3">{{ repository.name }}</td>
                    <td class="p-2 w-1/3">{{ repository.owner.login }}</td>
                    <td class="p-2 w-1/3">{{ repository.private ? "Yes" : "No" }} </td>
                </tr>
            </tbody>
    </table>
</div>

</template>

<style>

</style>

<script>

export default{

    // props: {
    //     repositories: {
    //       type: Array,
    //       default: ''
    //     },
    // },

    data: function(){
        return {
            repositories: []
        };
    },
    created(){

        axios.get('/api/github')
        .then(response => {
            // handle success

            console.log(response)
            
            this.repositories = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    },
    computed: {
        csrf_token:  function(){
            //return $('meta[name="csrf-token"]').attr('content')
        }
    }

}

</script>
