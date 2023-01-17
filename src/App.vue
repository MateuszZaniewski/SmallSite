<template>
  <MainHeader/>
  <mainPage v-if="width < 1000"/>
    <mainPageHightRes v-if="width > 1000"/>
  <AboutUs/>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import mainPage from './components/mainPage.vue'
import mainPageHightRes from './components/mainPageHightRes.vue'
import AboutUs from './components/AboutUs.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    mainPage,
    mainPageHightRes,
    AboutUs
  },

  setup(){
    const width = window.innerWidth
  
    return {
      width,
    }
  },
  mounted() {
    console.log(document.body);
  }
}

//<img alt="Vue logo" src="./assets/logo.png">

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
