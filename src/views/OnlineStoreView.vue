<template>
    <MainHeader/>
    <div>
      <onlineStore :item="items"/>
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
    props: {
        item : {
            type: String
        }
    },
    setup(){
      const width = window.innerWidth
      const items = ['Item1','Item2']
      
    
      return {
        width,
        items
      }
    },
    mounted() {
    
    }
    }
  </script>
  