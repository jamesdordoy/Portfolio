<template>
    <div class="flex justify-center w-full">
        <table class="text-left w-full">
            <thead class="bg-grey-darkest text-grey-dark text-white w-full">
                <tr class="flex w-full text-grey-dark">
                    <th class="p-2 w-1/10">#</th>
                    <th class="p-2 w-1/6">Name</th>
                    <th class="p-2 w-1/10">Owner</th>
                    <th class="p-2 w-1/10">Links</th>
                    <th class="p-2 w-1/10">Private</th>
                    <th class="p-2 w-1/10">Created At</th>
                    <th class="p-2 w-1/10">Updated At</th>
                    <th class="p-2 w-1/10">Update</th>
                </tr>
            </thead>
            <tbody class="flex flex-col items-center justify-between w-full text-grey-light border-l border-r border-b border-grey-darkest rounded-b bg-nav">
                <tr v-for="repository in repositories" :key="repository.id" class="flex w-full mb-4">
                    <td class="p-2 w-1/10">{{ repository.id }}</td>
                    <td class="p-2 w-1/6">{{ repository.name }}</td>
                    <td class="p-2 w-1/10">{{ repository.owner.login }}</td>
                    <td class="p-2 w-1/10"><a style="word-wrap: break-word;" :href="repository.url">api link</a></td>
                    <td class="p-2 w-1/10">{{ repository.private ? "Yes" : "No" }} </td>
                    <td class="p-2 w-1/10">{{ repository.created_at|format-moment-dd/mm/yyyy }}</td>
                    <td class="p-2 w-1/10">{{ repository.updated_at|format-moment-dd/mm/yyyy }}</td>
                    <td class="p-2 w-1/10"><a :href="'/dash/projects/'">
                            <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                <span>Update</span>
                            </button>
                        </a>
                    </td>
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
