<template>
    <div class="flex justify-center w-full">
        <table class="text-left w-full">
            <thead class="bg-grey text-grey-dark text-white w-full">
                <tr class="flex w-full text-grey-dark">
                    <th class="p-2 w-1/5">#</th>
                    <th class="p-2 w-1/5">Name</th>
                    <th class="p-2 w-1/5">Description</th>
                    <th class="p-2 w-1/5">Owner</th>
                    <th class="p-2 w-1/5">Links</th>
                    <th class="p-2 w-1/5">Private</th>
                    <th class="p-2 w-1/5">Created At</th>
                    <th class="p-2 w-1/5">Updated At</th>
                    <th class="p-2 w-1/5">Update</th>
                    <th class="p-2 w-1/5">Delete</th>
                </tr>
            </thead>
            <tbody class="flex flex-col items-center justify-between w-full border-l border-r border-b border-grey-darkest rounded-b">
                <tr v-for="repository in repositories" :key="repository.id" class="flex w-full mb-4">
                    <td class="p-2 w-1/5">{{ repository.id }}</td>
                    <td class="p-2 w-1/5">{{ repository.name }}</td>
                    <td class="p-2 w-1/5">{{ repository.description }}</td>
                    <td class="p-2 w-1/5">{{ repository.owner.login }}</td>
                    <td class="p-2 w-1/5"><a :href="repository.url">{{ repository.url }}</a></td>
                    <td class="p-2 w-1/5">{{ repository.private }} </td>
                    <td class="p-2 w-1/5">{{ repository.created_at }}</td>
                    <td class="p-2 w-1/5">{{ repository.updated_at }}</td>
                    <td class="p-2 w-1/5"><a :href="'/dash/projects/'">
                            <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                <span>Update</span>
                            </button>
                        </a>
                    </td>
                    <td>
                        <a :href="'/dash/projects/'"
                        data-method="delete"
                        :data-token="csrf_token"
                        data-confirm="Are you sure?">
                        <button class="btn btn-danger">
                            <i class="fa fa-times" aria-hidden="true"></i>
                            Delete
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
