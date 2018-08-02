<template>

<div class="table-responsive">
    <table class="table table-striped table-hover">
      <caption>List of Project's</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Owner</th>
          <th scope="col">Links</th>
          <th scope="col">Private</th>
          <th scope="col">Created At</th>
          <th scope="col">Updated At</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repository in repositories" :key="repository.id">
          <th scope="row">{{ repository.id }}</th>
          <td>{{ repository.name }}</td>
          <td>{{ repository.description }}</td>
          <td>{{ repository.owner.login }}</td>
          <td>{{ repository.url }}</td>
          <td>{{ repository.private }} </td>
          <td>{{ repository.created_at }}</td>
          <td>{{ repository.updated_at }}</td>
          <td><a :href="'/dash/projects/'">
                <button class="btn btn-primary">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                    Update
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

    props: {
        repositories: {
          type: Array,
          default: ''
        },
    },

    data: function(){
        return {};
    },

    computed: {
        csrf_token:  function(){
            return $('meta[name="csrf-token"]').attr('content')
        }
    }

}

</script>
