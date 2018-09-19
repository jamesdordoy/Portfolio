<template>

<div>
    <table class="table table-striped table-hover table-responsive">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Owner</th>
          <th scope="col">Completed</th>
          <th scope="col">Links</th>
          <th scope="col">Created At</th>
          <th scope="col">Updated At</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <th scope="row">{{ project.id }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.owner }}</td>
          <td>{{ project.completed }}</td>
          <td>{{ project.link }}</td>
          <td>{{ project.created_at }}</td>
          <td>{{ project.updated_at }}</td>
          <td><a :href="'/back/projects/' + project.id">
                <button class="btn btn-primary">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                    Update
                </button>
              </a>
          </td>
          <td>
            <a :href="'/back/projects/' + project.id"
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

<style scoped>
table {
  color:#ccc;
}
</style>
<script>
export default{
    props: {
        projects: {
          type: Array,
          default: () => ([])
        },
    },
    computed: {
        csrf_token:  function(){
            return $('meta[name="csrf-token"]').attr('content')
        }
    }
}
</script>
