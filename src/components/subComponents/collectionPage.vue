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
    <h1>Oferta</h1>
        <div id="collectionWrapper">
            <h2>Bielizna</h2>
            <ul>
                <li v-for="item in db.collection" v-bind:key="item">
                    <a class="collectionHref" href="#">
                        <div>
                            <img :src="item.img">
                            <p>{{item.name}}</p>
                        </div>
                    </a>
                </li>
            </ul>
            <h2>Koszule nocne</h2>
            <ul>
                <li v-for="shirt in db.nightwear" v-bind:key="shirt">
                    <a class="collectionHref" href="#">
                        <div>
                            <img :src="shirt.img">
                            <p>{{shirt.name}}</p>
                        </div>
                    </a>
                </li>
            </ul>
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