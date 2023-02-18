<script>

import collectionDB from '../../store/collectionDB.js'

export default {
  name: 'CollectionPage',
  props: {
    
  },
  components: {

  },

  data() {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    return {
       db : collectionDB,
       showSection1: true,
       showSection2: true,
       showSection3: true,
       checked: false,
       isToggled : false,
       scrollTop,
    }
  },
  computed: {
    
  },
  mounted() {
    
  },
  beforeUnmount() {
        
    },
  methods: {
    showDets(Event, index) {
        console.log(document.documentElement.scrollTop)
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        console.log(scrollTop)
        document.getElementsByClassName(`${index}`)[0].classList.toggle("hide");
        document.getElementsByClassName(`${index}`)[0].style.top = scrollTop + 'px'
        this.isToggled = !this.isToggled
        
    },
    toggleDetails() {
      
      
    },
  },
  setup() {

    return {

    }
  }
}
</script>

<template>
    <div v-if="!isToggled" class="showFilterBox">
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
        <div  id="collectionWrapper">
            <h2 v-if="showSection1">Bielizna</h2>
            <ul v-if="showSection1">
                <li v-for="(item, index) in db.collection" v-bind:key="item">
                    
                        <div :id="index">
                            <img  :src="item.img">
                            <p>{{item.name}}</p>
                            <button @click="showDets(Event,index)">Zobacz</button>

                            <div :class="index" class="hide productDetails">
                                <button @click="showDets(Event,index)">Zamknij</button>
                                <div class="details__Image">
                                    <img :src="item.img">
                                </div>
                                
                                <div class="details__info">
                                    <p>Nazwa produktu : {{item.name}}</p>
                                    <p>Opis produktu : {{item.details.opis}}</p>
                                    <p>Dostępne kolory : {{item.details.colors}}</p>
                                    <p>Skład produktu : {{item.details.sklad}}</p>
                                    <p>Informacje o praniu : {{item.details.pranie}}</p>
                                </div>
                            </div>
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
</template>

<style scoped>

.show {
    display: flex;
    flex-flow: column;
}

.hide {
    display: none;
}

.productDetails{
    position: absolute;
    background: rgb(161, 235, 161);
    left: 0;
    width: 100%;
}

.details__Image {
    max-height: 400px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1vh;
}
.details__Image img{
    max-height: 400px;

}

.details__info p{
    padding-bottom: 1vh;
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