<template>
    <div class="column adjust" style="padding-botton: 40px">
        <div class="card">
        <div class="card-image">
        <figure class="image is-4by3">
            <img :src="post.urlToImage" v-if="post.urlToImage"  alt="Placeholder image">
            <img :src="idefault" v-else alt="Placeholder image">
        </figure>
        </div>
        <div class="card-content">
        <div class="media">
            <div class="media-content">
            <p class="title is-4">
            <a :href="post.url">{{ post.title }}</a>
            </p>
            <p class="subtitle is-6">{{ post.description }}</p>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'News',
  props: {
    post: Object,
    idefault: String
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
