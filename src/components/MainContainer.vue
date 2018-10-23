<template>
  <div>     
    <div class="columns" v-for="n in posts">
        <div class="column" v-for="post in n">
          <News :post=post :idefault=idefault></News>
        </div>
    </div>
  </div>
</template>

<script>
import News from './News.vue'

export default {
  name: 'MainContainer',
  props: {
    posts: Array,
    idefault: String
  },
  components: {
    News
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
