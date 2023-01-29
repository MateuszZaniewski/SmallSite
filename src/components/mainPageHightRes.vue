<script>
  

  export default {
  name: 'mainPageHightRes',
  props: {
    
  },
  components: {

  },

  data() {

    return {
       
    }
  },
  mounted() {
    
  },
  beforeUnmount() {
        
    },
  methods: {
    
  },
  setup() {
    const heroImagePath = require('../assets/heroImage.jpg')
    const heroImagePath1 = require('../assets/heroImage1.jpg')
    const heroImagePath2 = require('../assets/heroImage2.jpg')
    return {
        heroImagePath,
        heroImagePath1,
        heroImagePath2,
    }
  }
}

</script>

<template>
    
    <main>
        <div class="multiImageContainer">
                <div class="multiImageContainer__1">
                    <div class="heroImageContainer">
                        <img v-once :src="heroImagePath" class="heroImage">
                    </div>
                    <h1>Ponadczasowa klasyka</h1>
                    <p>VIVISENCE perfekcyjnie łączy klasykę z elegancją. Subtelnie przemyca akcenty najnowszych trendów, dodając bieliźnie zmysłowości i delikatności. W kolekcji królują stonowane, ponadczasowe, bazowe kolory idealne dla kobiety w każdym wieku.</p>
                </div>
                <div class="multiImageContainer__2">
                    <h1>Gwarancja jakości</h1>
                    <p>Bielizna VIVISENCE wykonana jest z bardzo starannie wyselekcjonowanych surowców wysokiej jakości. Swoje doświadczenie w branży bieliźniarskiej przekładamy na najwyższą jakość produktów. Nasza bielizna pakowana jest w eleganckie pudełka, które doskonale nadają się na prezent.</p>
                    <div class="heroImageContainer">
                        <img v-once :src="heroImagePath1" class="heroImage">
                    </div>
                    
                </div>
                <div class="multiImageContainer__3">
                    <div class="heroImageContainer">
                        <img v-once :src="heroImagePath2" class="heroImage">
                    </div>
                    <h1>Komfort i wygoda</h1>
                    <p>VIVISENCE to marka, która dba o każdy biust. W naszej ofercie Klientki znajdą nie tylko perfekcyjnie wykonane konstrukcje, a także szeroki wybór rozmiarów - miseczki do rozmiaru J. Doskonale wiemy, że tylko najwyższa jakość daje poczucie komfortu.</p>
                </div>
        </div>
    </main>

</template>


<style scoped>

.multiImageContainer{
    display: flex;
    flex-flow: row nowrap;
    width: 90%;
    margin: 0 auto;
    gap: 10px;
}

.heroImageContainer {
    height: 30vh;
    margin: 0 auto;
    padding-top: 2vh;   
}
.heroImage{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0.2rem;
    max-height: 600px;
}

h1{
    font-size: 2rem;
    text-align: center;
}

p{
    text-align: center;
    padding: 0.25rem 0.5rem;
}

</style>