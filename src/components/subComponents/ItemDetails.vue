<template>
  <div>
    <p>{{name.name}}</p>
    <span>{{itemName}}</span>
  </div>
</template>

<script>

import collectionDB from '../../store/collectionDB.js'
import { ref } from 'vue'

export default {
  name: 'ItemDetails',
  components: {
    
  },
  props: {
    name: {
      type: Object,
      required: true
    },
  },
  setup(props){
    const itemName = ref(props.name.name)

    return {
      itemName
    }
  },
  data() {

    return {
       db : collectionDB,

    }
}
}
</script>

<style>

</style>