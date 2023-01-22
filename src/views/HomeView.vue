<template>
  <MainHeader/>
  <div>
    <mainPage v-if="width < 1000"/>
      <mainPageHightRes v-if="width > 1000"/>
    <AboutUs/>
  </div>
  <FooterMain/>
</template>

<script>
// @ is an alias to /src
import MainHeader from '../components/MainHeader.vue'
import mainPage from '../components/mainPage.vue'
import mainPageHightRes from '../components/mainPageHightRes.vue'
import AboutUs from '../components/AboutUs.vue'
import FooterMain from '../components/FooterMain.vue'

export default {
  name: 'HomeView', 
  components: {
    MainHeader,
    mainPage,
    mainPageHightRes,
    FooterMain,
    AboutUs
  },
  data () {
    return {
    }
  },
  computed: {
  },
  setup(){
    const width = window.innerWidth
    
  
    return {
      width,
    }
  },
  mounted() {
  
  }
  }
</script>
