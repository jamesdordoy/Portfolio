<template>

<div>
    <table class="table table-striped table-hover table-responsive">
      <caption>List of Project's</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Text</th>
          <th scope="col">favorite_count</th>
          <th scope="col">retweet_count</th>
          <th scope="col">Links</th>
          <th scope="col">Created At</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tweet in this.list">
          <th scope="row">{{ tweet.id }}</th>
          <td>{{ tweet.text }}</td>
          <td>{{ tweet.favorite_count }}</td>
          <td>{{ tweet.retweet_count }}</td>
          <td>{{ tweet.link }}</td>
          <td>{{ tweet.created_at }}</td>
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
        tweets: {
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
        this.list = JSON.parse(this.tweets);
    },

    computed: {
        csrf_token:  function(){
            // return $('meta[name="csrf-token"]').attr('content')
        }
    }

}

</script>
