<template>
    <MainHeader/>
    <div>
      <onlineStore/>
    </div>
    <FooterMain/>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainHeader from '../components/MainHeader.vue'
  import onlineStore from '../components/subComponents/onlineStorePage.vue'
  import FooterMain from '../components/FooterMain.vue'
  
  export default {
    name: 'HomeView', 
    components: {
      MainHeader,
      FooterMain,
      onlineStore
      
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
  