<template>
  <div>
    <h1>{{ name }}</h1>
    <h2> {{obj}} </h2>
  </div>
</template>

<script>

import collectionDB from '../../store/collectionDB.js'

export default {
  name: 'ItemDetails',
  components: {
    
  },
  props: {
    name: {
      type: String,
      required: true
    },
    obj : {
      type: String,
      required: true
    }
  },
  created() {
    console.log('Obj:', this.obj)
  },
  data() {
    let ItemName = this.name
    
    return {
       db : collectionDB,
       ItemName
    }
}
}
</script>

<style>

</style>