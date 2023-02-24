<template>
  <div>
    <div v-for="details in filteredItems" :key="details">
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

          <div class="product__buttons">
            <button class="buttons--button"></button>
            <button class="buttons--button"></button>
            <button class="buttons--button"></button>
          </div>

          <div class="product__details">
            <p class="details--text"></p>
            <button class="details--more"></button>
          </div>

          <div class="product__redirect">
            <button class="redirect--button"></button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {database} from '../../store/collectionDB.js'
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
  data(props) {
    return {
       db : database,
       filterName: ref(props.name.name)

    }
  },
  computed: {
    filteredItems() {
    const filtered = {}
    for (const key in this.db.collection) {
      if (Object.prototype.hasOwnProperty.call(this.db.collection, key) && this.db.collection[key].id === this.filterName) {
        filtered[key] = this.db.collection[key]
      }
    }
    return filtered
  }
}
}
</script>

<style scoped>

.product {
  width: 100%;
}

</style>