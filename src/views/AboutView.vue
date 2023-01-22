<template>
  <MainHeader/>
  <div>
    <aboutUsPage/>
  </div>
  <FooterMain/>
</template>

<script>
// @ is an alias to /src
import MainHeader from '../components/MainHeader.vue'
import aboutUsPage from '../components/subComponents/aboutUsPage.vue'
import FooterMain from '../components/FooterMain.vue'

export default {
  name: 'HomeView', 
  components: {
    MainHeader,
    FooterMain,
    aboutUsPage
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
