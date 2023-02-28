<template>
  <div>
    <div v-for="details in filteredItems" :key="details">
      <div v-if="details.id == itemName">
        <div class="product">

          <div class="product__backbutton">
            <img @click="this.$router.go(-1)" class="backButton" :src="backButtonPath">
          </div>

          <div class="product__imageframe">
            <div class="imageframe--image">
              <img class="arrows"
              @click="currentImage >= 1 ? currentImage-- : currentImage = 2" 
              :src="lessThanPath">

              <img v-show="currentImage == 0" 
              class="image" 
              :src="details.img" />

              <img v-show="currentImage == 1" 
              class="image" 
              :src="details.img2" />

              <img v-show="currentImage == 2" 
              class="image" 
              :src="details.img3" />

              <img class="arrows"
              @click="currentImage <= 1 ? currentImage++ : currentImage = 0" 
              :src="greaterThanPath">

            </div>
            <div class="imageframe--sliders">
              <span
              :class="currentImage == 0 ? 'coloredDot' : 'defauldDot'"
              >&#8226;</span>

              <span 
              :class="currentImage == 1 ? 'coloredDot' : 'defauldDot'"
              >&#8226;</span>

              <span
              :class="currentImage == 2 ? 'coloredDot' : 'defauldDot'"
              >&#8226;</span>

            </div>

          </div>

          <div class="product__summary">
            <span class="summary--shortName">{{details.shortName}}</span>
            <span class="summary--type">{{details.type}}</span>
          </div>

          <div class="product__buttons">
            <button @click="showOpis = true, showSklad = false , showPranie = false, expandAll = false" class="buttons--button">Opis produktu</button>
            <button @click="showOpis = false, showSklad = true , showPranie = false , expandAll = true" class="buttons--button">Skład produktu</button>
            <button @click="showOpis = false, showSklad = false , showPranie = true, expandAll = true" class="buttons--button">Inne informacje</button>
          </div>

          <div class="product__details">
            <p v-if="showOpis" class="details--text">{{!expandAll ? `${details.details.opis.substring(0, 200)}...` : details.details.opis }}</p>
            <p v-if="showSklad" class="details--text">{{details.details.sklad}}</p>
            <div v-if="showPranie" class="details--text">
              <ul v-for="infos in details.details.info" :key="infos">
                <li>{{infos}}</li>
              </ul>
            </div>
            <p v-if="!expandAll" @click="expandAll = true" class="details--more">Pokaż więcej &#8595;</p>
          </div>

          <div class="product__redirect">
            <a :href="details.details.redirect" class="redirect--button">Sprawdz w sklepie!</a>
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
    },
  },

  setup(props){
    const itemName = ref(props.name.name)
    const backButtonPath = require('../../assets/backButton.png')
    const leavingSitePath = require('../../assets/leavingSite.png')
    const lessThanPath = require('../../assets/lessThan.png')
    const greaterThanPath = require('../../assets/greaterThan.png')
    return {
      itemName,
      backButtonPath,
      leavingSitePath,
      lessThanPath,
      greaterThanPath,
    }
  },
  data(props) {
    return {
        db : database,
        filterName: ref(props.name.name),
        showOpis: true,
        showSklad : false,
        showPranie : false,
        expandAll : false,
        currentImage: 0,

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
      console.log(filtered)
      return filtered
    },
  }
}
</script>

<style scoped>

.product {
  width: 90%;
  margin: 0 auto;
}

.product__backbutton {
  padding: 0.5rem 0 0 0.5rem;
}

.backButton {
  height: 35px;
  width: 35px;
}

.imageframe--image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  height: 50%;
  width: 50%;
}

.imageframe--sliders {
  text-align: center;
}

.imageframe--sliders span {
  margin: 0.75rem;
  font-size: 1.8rem;
  height: fit-content;
}

.arrows {
  height: 30px;
  width: 30px;
  margin: 0 0.5rem;
}

.coloredDot {
  color: #f0bc64;
}

.defaultDot {
  color: #363636;
}

.product__summary {
  display: flex;
  flex-flow: column nowrap;
}

.summary--shortName {
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  font-weight: bold;
}

.summary--type {
  font-size: 0.8rem;
  font-style: italic;
}

.product__buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.buttons--button {
  padding: 0.25rem 0.5rem;
  background: #f0bc64;
  border: 1px solid #f0bc64;
  border-radius: 0.5rem;
}


.details--more{
  text-align: center;
}

.product__redirect {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.redirect--button {
  background: #f0bc64;
  padding: 0.25rem 0.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #1b1b1b;
  
}

</style>