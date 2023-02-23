<template>
  <div>
    <ul v-for="details in db.collection" :key="details">
      <div v-if="details.id == itemName">
        <div class="product">
          <div class="product__imageframe">
            <div class="imageframe--image">
              <img />
            </div>
            <div class="imageframe--sliders">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>

          <div class="product__summary">
            <span class="summary--name"></span>
            <span class="summary--type"></span>
          </div>

        </div>
      </div>
    </ul>
  </div>

  <!-- <img :src="details.img">
          {{ details.details.opis }}
          {{ details.details.colors }}
          {{ details.details.sklad }}
          {{ details.details.pranie }} -->
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
    }
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