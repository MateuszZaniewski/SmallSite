<script>

import {database} from '../../store/collectionDB.js'

export default {
  name: 'CollectionPage',
  props: {

  },
  components: {

  },

  data() {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    return {
       db : database,
       showSection1: true,
       showSection2: true,
       showSection3: true,
       checked: false,
       isToggled : false,
       scrollTop,
    }
  },
  computed: {
    BraCollection() {
       return Object.values(database.collection).filter(item => item.fil === 'Bra')
    },
    NightwearCollection() {
        return Object.values(database.collection).filter(item => item.fil == 'Nightwear')
    },
    SwimmwearCollection() {
        return Object.values(database.collection).filter(item => item.fil == 'Swimmwear')
    }
  },
  mounted() {
    
  },
  beforeUnmount() {
        
    },
  methods: {
    showDets(Event, index) {

        document.getElementsByClassName(`${index}`)[0].classList.toggle("hide");
        this.isToggled = !this.isToggled
        document.body.style.overflow == 'hidden' ? document.body.style.overflow = 'scroll' : document.body.style.overflow = 'hidden'
        
    },
  },
  setup() {
    const backButtonPath = require('../../assets/backButton.png')
    return {
        backButtonPath
    }
  }
}
</script>

<template>
    <div v-if="!isToggled" class="showFilterBox">
        <div class="checkbox">
            <div class="product__backbutton">
                <img @click="this.$router.go(-1)" class="backButton" :src="backButtonPath">
              </div>
            <div>
                <span>Pokaż filtry</span>
                <input type="checkbox" v-model="checked">
            </div>
            
        </div>
        <div v-if="checked" class="filterBox">
            <button 
            @click="showSection1 = true, showSection2 = true, showSection3 = true"
            :class="showSection1 && showSection2 && showSection3 ? 'open' : 'closed' "
            id="showAll"
            >Pokaż wszystko</button>
            <button 
            @click="showSection1 = true, showSection2 = false, showSection3 = false"
            :class="showSection1 ? 'open' : 'closed'"
            id="bielizna"
            >Bielizna</button>
            <button 
            @click="showSection1 = false, showSection2 = true, showSection3 = false"
            :class="showSection2 ? 'open' : 'closed'"
            id="koszule"
            >Koszule nocne</button>
            <button 
            @click="showSection1 = false, showSection2 = false, showSection3 = true"
            :class="showSection3 ? 'open' : 'closed'"
            id="stroje"
            >Stroje kąpielowe</button>
        </div>
    </div>
        <div  id="collectionWrapper">
            <ul v-if="showSection1">
                <li v-for="(item, index) in BraCollection" :key="item">
                        <div  :id="index">
                            <img  :src="item.img">
                            <p>{{item.name}}</p>

                            <router-link :shortName="item.type" class="redirect" :to="{ 
                                name: 'item', 
                                params: {
                                    name: item.id,
                                },
                                }"
                                >Zobacz
                            </router-link>
                        </div>   
                </li>
            </ul>
            <ul v-if="showSection2">
                <li v-for="(item, index) in NightwearCollection" :key="item">
                        <div :id="index">
                            <img  :src="item.img">
                            <p>{{item.name}}</p>

                            <router-link :shortName="item.type" class="redirect" :to="{ 
                                name: 'item', 
                                params: {
                                    name: item.id,
                                },
                                }"
                                >Zobacz
                            </router-link>
                        </div>   
                </li>
            </ul>
            <ul v-if="showSection3">
                <li v-for="(item, index) in SwimmwearCollection" :key="item">
                        <div :id="index">
                            <img  :src="item.img">
                            <p>{{item.name}}</p>

                            <router-link :shortName="item.type" class="redirect" :to="{ 
                                name: 'item', 
                                params: {
                                    name: item.id,
                                },
                                }"
                                >Zobacz
                            </router-link>
                        </div>   
                </li>
            </ul>
        </div>
</template>

<style scoped>

.product__backbutton {
    padding: 0.5rem 0 0 0.5rem;
  }
  
  .backButton {
    height: 35px;
    width: 35px;
  }
.redirect{
    background: rgb(207, 206, 206);
    color: black;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

h1{
    text-align: center;
}

#collectionWrapper {
    width: 90%;
    margin: 0 auto;
}

#collectionWrapper ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    gap: 10px;
    padding: 0;
    justify-content: space-around;
}

#collectionWrapper ul li {
    width: 45%;
    padding: 1rem 0;
}

#collectionWrapper ul li div {
    text-align: center;
}

#collectionWrapper ul li div p {
    margin: 0;
    padding-bottom: 0.5rem;
    font-size: 0.7rem;
    word-break: break-word;
    text-decoration: none;
    line-height: 1.3;
}

#collectionWrapper ul li div img {
    width: 100%;
}

.collectionHref{
    text-decoration: none;
    color: black;
}

h2 {
    text-align: center;
}

.filterBox {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 90%;
    margin: 0 auto;
    
}

.open{
    background-color: #f0bc64;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.closed{
    background-color: rgb(243, 209, 151);
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.checkbox {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-bottom: 10px;
}


.checkbox input {
    height: 20px;
    width: 20px;
}

  input[type="checkbox"] {
    accent-color: rgb(243, 209, 151);  
}

.filterBox__search input {
    border: 1px solid #f0bc64;
    padding: 0.25rem 0.5rem;
}

@media (min-width: 700px){
    #collectionWrapper {
        width: 90%;
        margin: 0 auto;
    }
    
    #collectionWrapper ul {
        display: flex;
        flex-flow: row wrap;
        list-style: none;
        gap: 10px;
        padding: 0;
        justify-content: space-around;
    }
    
    #collectionWrapper ul li {
        width: 30%;
    }
    
    #collectionWrapper ul li div {
        text-align: center;
    }
    
    #collectionWrapper ul li div img {
        width: 80%;
    }

    #collectionWrapper ul li div p {
        margin: 0;
        font-size: 1.2rem;
        word-break: break-word;
        text-decoration: none;
        line-height: 1.5;
    }

    .filterBox button {
        font-size: 1rem;
    }
    .checkbox{
        font-size: 1.2rem;
    }
}

</style>