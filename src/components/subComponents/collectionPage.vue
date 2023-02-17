<script>

import collectionDB from '../../store/collectionDB.js'

export default {
  name: 'CollectionPage',
  props: {
    
  },
  components: {

  },

  data() {

    return {
       db : collectionDB,
       showSection1: true,
       showSection2: true,
       showSection3: true,
       checked: false,
       show: false
    }
  },
  computed: {
    
  },
  mounted() {
    
  },
  beforeUnmount() {
        
    },
  methods: {
    showDets() {
        this.show != this.show
    }
  },
  setup() {

    return {

    }
  }
}
</script>

<template>
    <div class="showFilterBox">
        <div class="checkbox">
            <span>Pokaż filtry</span>
            <input type="checkbox" v-model="checked">
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
        <div id="collectionWrapper">
            <h2 v-if="showSection1">Bielizna</h2>
            <ul v-if="showSection1">
                <li v-for="(item) in db.collection" v-bind:key="item" @click="showDetails">
                    
                        <div>
                            <img  :src="item.img">
                            <p>{{item.name}}</p>
                            <button @click="showDets">Więcej</button>
                        </div>

                        <div v-if="show">
                            <li v-for="det in item.details" v-bind:key="det">
                                <p>{{det}}</p>
                            </li>
                        </div>
                </li>
            </ul>

            <h2 v-if="showSection2">Koszule nocne</h2>
            <ul v-if="showSection2">
                <li v-for="shirt in db.nightwear" v-bind:key="shirt">
                    
                        <div>
                            <img :src="shirt.img">
                            <p>{{shirt.name}}</p>
                            <button @click="displayDetails">Więcej</button>
                        </div>
                    
                </li>
            </ul>
            <h2 v-if="showSection3">Stroje kąpielowe</h2>
            <ul v-if="showSection3">
                <li v-for="swimmwear in db.swimmwear" v-bind:key="swimmwear">
                    
                        <div>
                            <img :src="swimmwear.img">
                            <p>{{swimmwear.name}}</p>
                            <button @click="displayDetails">Więcej</button>
                        </div>
                    
                </li>
            </ul>
        </div>

        <div class="detailsWrapper">

        </div>
</template>

<style scoped>

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
    justify-content: right;
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