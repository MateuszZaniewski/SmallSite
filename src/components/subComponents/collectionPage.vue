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
    }
  },
  mounted() {
    
  },
  beforeUnmount() {
        
    },
  methods: {

  },
  setup() {

    return {

    }
  }
}
</script>

<template>
    <div class="filterBox">
        <button 
        @click="showSection1 = true, showSection2 = true, showSection3 = true"
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
        <div id="collectionWrapper">
            <h2 v-if="showSection1">Bielizna</h2>
            <ul v-if="showSection1">
                <li v-for="item in db.collection" v-bind:key="item">
                    <a class="collectionHref" href="#">
                        <div>
                            <img :src="item.img">
                            <p>{{item.name}}</p>
                        </div>
                    </a>
                </li>
            </ul>
            <h2 v-if="showSection2">Koszule nocne</h2>
            <ul v-if="showSection2">
                <li v-for="shirt in db.nightwear" v-bind:key="shirt">
                    <a class="collectionHref" href="#">
                        <div>
                            <img :src="shirt.img">
                            <p>{{shirt.name}}</p>
                        </div>
                    </a>
                </li>
            </ul>
            <h2 v-if="showSection3">Stroje kąpielowe</h2>
            <ul v-if="showSection3"></ul>
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
    background-color: rgb(243, 209, 151);
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.closed{
    background-color: rgb(240, 237, 233);
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
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
}

</style>