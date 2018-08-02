<template>
    <section class="twitter">
      <h3>My Twitter Feed  <i class="fa fa-arrow-down fa-1x"></i></h3>
      <ul class="twitter-feed">
          <li v-for="tweet in this.list" :key="tweet.id">
              <p>
                  {{ tweet.text }}
              </p>
          </li>
      </ul>
    </section>
</template>

<script>
export default{
    props: ['tweets'],
    data: function(){
        return {
            list: '',
        };
    },
    created: function(){
        this.list = JSON.parse(this.tweets);
    }
}
</script>