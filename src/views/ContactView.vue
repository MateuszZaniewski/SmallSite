<template>
    <MainHeader/>
    <div>
      <Contact/>
    </div>
    <FooterMain/>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainHeader from '../components/MainHeader.vue'
  import Contact from '../components/subComponents/ContactPage.vue'
  import FooterMain from '../components/FooterMain.vue'
  
  export default {
    name: 'HomeView', 
    components: {
      MainHeader,
      FooterMain,
      Contact
      
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
  