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
       db : collectionDB
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
    <h1>New Collection</h1>
        <div id="collectionWrapper">
            <ul>
                <li v-for="item in db.collection" v-bind:key="item">
                    <a class="collectionHref" href="#">
                        <div>
                            <img :src="item.img">
                            <p>Model : {{item.name}}</p>
                            <p>Typ : {{item.type}}</p>
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
    width: 100%;
    border-bottom: 1px solid rgb(215, 176, 111);
    padding-bottom: 10px;
}

#collectionWrapper ul li div {
    text-align: center;
}

#collectionWrapper ul li div img {
    width: 40%;
}

.collectionHref{
    text-decoration: none;
    color: black;
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
        width: 100%;
    }
}

</style>