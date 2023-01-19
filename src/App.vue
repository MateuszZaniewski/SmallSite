<template>
  <MainHeader/>
  <mainPage v-if="width < 1000"/>
    <mainPageHightRes v-if="width > 1000"/>
  <AboutUs/>
  <FooterMain/>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import mainPage from './components/mainPage.vue'
import mainPageHightRes from './components/mainPageHightRes.vue'
import AboutUs from './components/AboutUs.vue'
import FooterMain from './components/FooterMain.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    mainPage,
    mainPageHightRes,
    AboutUs,
    FooterMain
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
*{
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1280px;
  margin: 0 auto;
  line-height: 25px;
}

body{
  margin: 0;
  padding: 0;
}
</style>
