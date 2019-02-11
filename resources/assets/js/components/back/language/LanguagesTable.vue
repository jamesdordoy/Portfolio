<template>
    <div class="flex justify-center w-full">
        <table class="text-left w-full">
            <thead class="bg-grey-darkest text-grey-dark text-white w-full">
                <tr class="flex w-full text-grey-dark">
                    <th class="p-2 w-1/5">#</th>
                    <th class="p-2 w-1/5">Name</th>
                    <th class="p-2 w-1/5">Description</th>
                    <th class="p-2 w-1/5">Created At</th> 
                    <th class="p-2 w-1/5">Updated At</th>
                    <th class="p-2 w-1/5">Update</th>
                    <th class="p-2 w-1/5">Delete</th>
                </tr>
            </thead>
            <tbody class="flex flex-col items-center justify-between w-full text-grey-light border-l border-r border-b border-grey-darkest rounded-b bg-nav">
                <tr v-for="language in languages" :key="language.id" class="flex w-full mb-4">
                    <td class="p-2 w-1/5" scope="row">{{ language.id }}</td>
                    <td class="p-2 w-1/5">{{ language.name }}</td>
                    <td class="p-2 w-1/5">{{ language.description }}</td>
                    <td class="p-2 w-1/5">{{ language.created_at|format-moment-dd/mm/yyyy }}</td>
                    <td class="p-2 w-1/5">{{ language.updated_at|format-moment-dd/mm/yyyy }}</td>
                    <td class="p-2 w-1/5">
                      <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                            <i class="fa fa-edit" aria-hidden="true"></i>&nbsp;
                            <span>Update</span>&nbsp;
                      </button>
                    </td>
                    <td class="p-2 w-1/5">
                        <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                            <i class="fa fa-times" aria-hidden="true"></i>&nbsp;
                            Delete
                      </button>
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
    props: {
        languages: {
          type: Array,
          default: []
        },
    },
    computed: {
        csrf_token:  function(){
            // return $('meta[name="csrf-token"]').attr('content')
        }
    }
}

</script>
