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
      <tbody class="flex flex-col items-center justify-between w-full border-l border-r border-b border-grey-darkest rounded-b bg-nav">
          <tr v-for="language in languages" :key="language.id" class="flex w-full mb-4">
            <td class="p-2 w-1/5" scope="row">{{ language.id }}</td>
            <td class="p-2 w-1/5">{{ language.name }}</td>
            <td class="p-2 w-1/5">{{ language.description }}</td>
            <td class="p-2 w-1/5">{{ language.created_at }}</td>
            <td class="p-2 w-1/5">{{ language.updated_at }}</td>
            <td class="p-2 w-1/5"><a :href="'/dash/languages/' + language.id">
                  <button class="btn btn-primary">
                      <i class="fa fa-refresh" aria-hidden="true"></i>
                      Update
                  </button>
                </a>
            </td>
            <td class="p-2 w-1/5">
              <a :href="'/dash/languages/' + language.id"
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
