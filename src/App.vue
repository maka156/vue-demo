<template>
  <div id="app">
      <div class="container">
        <Title :country=country></Title>
        <MainContainer :posts=posts :idefault=idefault></MainContainer>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Api from './Api.js'
import countryList from './config.js'
import Title from './components/Title.vue'
import MainContainer from './components/MainContainer.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Title,
    HelloWorld,
    MainContainer,
    Footer
  },
  data: function () {
    return {
      'posts': [],
      'country': 'us',
      'countryList': countryList,
      'idefault': 'https://bulma.io/images/placeholders/1280x960.png',
    }
  },
   created: function () {  

    this.getNews(this.country); 
    this.country = countryList[this.country];

    this.$eventHub.$on('editing', function (index) {

      this.getNews(index);
      this.country = countryList[index];
      
    }.bind(this));
        
  },
  methods: {
    chunck(items, size) {
       const result = []; 
       for (var x = 0; x < Math.ceil(items.length / size); x++) {           
         var start = x * size; var end = start + size;                                                
         result.push(items.slice(start, end)); 
       } 
       this.posts = result;
    },
    getNews(country) {
      Api().get('top-headlines?country=' + country)
      .then(response => {
        let c = response.data.articles;
        this.chunck(c, 4);
        console.log(response.data.articles);
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
