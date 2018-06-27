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
        <tr v-for="repo in this.list">
          <th scope="row">{{ repo.id }}</th>
          <td>{{ repo.name }}</td>
          <td>{{ repo.description }}</td>
          <td>{{ repo.owner.login }}</td>
          <td>{{ repo.url }}</td>
          <td> {{ repo.private }} </td>
          <td>{{ repo.created_at }}</td>
          <td>{{ repo.updated_at }}</td>
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
        repos: {
          type: String,
          default: ''
        },
    },

    data: function(){
        return {
            list: '',
        };
    },

    created: function(){
        this.list = JSON.parse(this.repos);
    },

    computed: {
        csrf_token:  function(){
            return $('meta[name="csrf-token"]').attr('content')
        }
    }

}

</script>
