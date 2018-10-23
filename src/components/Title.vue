
<template>
  <div class="center-me"> 
        <h1 class="title is-1">Global News</h1>
        <p class="title is-4">You are reading the top 20 {{ country }} News</p>

        <div class="padding-bottom-50">
          <button class="button"  @click="update('ar')">Argentina</button>
          <button class="button"  @click="update('ca')">Canada</button>
          <button class="button"  @click="update('mx')">México</button>
          <button class="button"  @click="update('us')">USA</button>
          <button class="button"  @click="update('ve')">Venezuela</button>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    country: String
  },
  methods: {
    update(ctry) {    
      this.$eventHub.$emit('editing', ctry);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padding-bottom-50 {
    padding-bottom: 50px;
  }
  .center-me {
    text-align: center
  }
</style>
