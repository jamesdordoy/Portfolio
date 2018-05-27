<template>

<div>
    <table class="table table-striped table-hover table-responsive">
      <caption>List of Language's</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Created At</th>
          <th scope="col">Updated At</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="language in this.list">
          <th scope="row">{{ language.id }}</th>
          <td>{{ language.name }}</td>
          <td>{{ language.description }}</td>
          <td>{{ language.created_at }}</td>
          <td>{{ language.updated_at }}</td>
          <td><a :href="'/dash/languages/' + language.id">
                <button class="btn btn-primary">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                    Update
                </button>
              </a>
          </td>
          <td>
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
        this.list = JSON.parse(this.languages);
    },

    computed: {
        csrf_token:  function(){
            return $('meta[name="csrf-token"]').attr('content')
        }
    }

}

</script>
