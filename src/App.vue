<template>
  <MainHeader/>

  <div v-if="store.state.currentPage == 0" id="homePage">
    <mainPage v-if="width < 1000"/>
      <mainPageHightRes v-if="width > 1000"/>
    <AboutUs/>
  </div>

  <div v-if="store.state.currentPage == 1" id="aboutUsPage">
    <aboutUsPage/>
  </div>

  <div v-if="store.state.currentPage == 2" id="collectionPage">
    <collectionPage/>
  </div>

  <div v-if="store.state.currentPage == 3" id="onlineStorePage">
    <onlineStorePage/>
  </div>

  <div v-if="store.state.currentPage == 4" id="ContactPage">
    <ContactPage/>
  </div>

  <FooterMain/>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import mainPage from './components/mainPage.vue'
import mainPageHightRes from './components/mainPageHightRes.vue'
import AboutUs from './components/AboutUs.vue'
import FooterMain from './components/FooterMain.vue'
import aboutUsPage from './components/subComponents/aboutUsPage.vue'
import collectionPage from './components/subComponents/collectionPage.vue'
import onlineStorePage from './components/subComponents/onlineStorePage.vue'
import ContactPage from './components/subComponents/collectionPage.vue'
import store from './store'


export default {
  name: 'App',
  components: {
    MainHeader,
    mainPage,
    mainPageHightRes,
    AboutUs,
    FooterMain,
    aboutUsPage,
    collectionPage,
    onlineStorePage,
    ContactPage,
    
  },
  data () {

    return {
      store
    }
  },
  computed: {
  },
  setup(){
    const width = window.innerWidth
    const currentSection = 0
    
  
    return {
      width,
      currentSection,
    }
  },
  mounted() {
  
  }
  }
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
