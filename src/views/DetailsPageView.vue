<template>
    <MainHeader/>
    <router-view>
        <ItemDetails :name="{name}"/>
    </router-view>
    <FooterMain/>
  </template>
  
  <script>
  // @ is an alias to /src
  import MainHeader from '../components/MainHeader.vue'
  import FooterMain from '../components/FooterMain.vue'
  import ItemDetails from '../components/subComponents/ItemDetails.vue'
  
  export default {
    name: 'DetailsPageView', 
    components: {
      MainHeader,
      FooterMain,
      ItemDetails
    },
    props : {
        name: {
            type: String,
            required: true
        }
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
  