<template>
    <MainHeader/>
    <div>
      <collectionPage/>
    </div>
    <FooterMain/>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainHeader from '../components/MainHeader.vue'
  import collectionPage from '../components/subComponents/collectionPage.vue'
  import FooterMain from '../components/FooterMain.vue'
  
  export default {
    name: 'HomeView', 
    components: {
      MainHeader,
      FooterMain,
      collectionPage
    },
    data () {
      return {
      }
    },
    computed: {
    },
    setup(){

      return {
        
      }
    },
    mounted() {
    
    }
    }
  </script>
  