<script> 
  

    export default {
  name: 'mainPage',
  props: {
    
  },
  components: {

  },

  data() {

    return {
        currentSlide: 0,
        intervalId: null
    }
  },
  mounted() {
    this.intervalId = setInterval(this.startLoop, 12000);
  },
  beforeUnmount() {
        clearInterval(this.intervalId);
    },
  methods: {
    startLoop() {
            this.currentSlide = (this.currentSlide + 1) % 3;
        }
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
            <transition name="fade">
                <div v-if="currentSlide == 0" class="multiImageContainer__1">
                    <div class="heroImageContainer">
                        <img v-once :src="heroImagePath" class="heroImage">
                    </div>
                    <h1>Ponadczasowa klasyka</h1>
                    <p>VIVISENCE perfekcyjnie łączy klasykę z elegancją. Subtelnie przemyca akcenty najnowszych trendów, dodając bieliźnie zmysłowości i delikatności. W kolekcji królują stonowane, ponadczasowe, bazowe kolory idealne dla kobiety w każdym wieku.</p>
                </div>
            </transition>
            <transition name="fade">
                <div v-if="currentSlide == 1" class="multiImageContainer__2">
                    <div class="heroImageContainer">
                        <img v-once :src="heroImagePath1" class="heroImage">
                    </div>
                    <h1>Gwarancja jakości</h1>
                    <p>Bielizna VIVISENCE wykonana jest z bardzo starannie wyselekcjonowanych surowców wysokiej jakości. Swoje doświadczenie w branży bieliźniarskiej przekładamy na najwyższą jakość produktów. Nasza bielizna pakowana jest w eleganckie pudełka, które doskonale nadają się na prezent.</p>
                </div>
            </transition>
            <transition name="fade">
                <div v-if="currentSlide == 2" class="multiImageContainer__3">
                    <div class="heroImageContainer">
                        <img v-once :src="heroImagePath2" class="heroImage">
                    </div>
                    <h1>Komfort i wygoda</h1>
                    <p>VIVISENCE to marka, która dba o każdy biust. W naszej ofercie Klientki znajdą nie tylko perfekcyjnie wykonane konstrukcje, a także szeroki wybór rozmiarów - miseczki do rozmiaru J. Doskonale wiemy, że tylko najwyższa jakość daje poczucie komfortu.</p>
                </div>
            </transition>
            
            
        </div>
        
    </main>
</template>



<style scoped>

.multiImageContainer{
    position: relative;
}

.multiImageContainer__1, .multiImageContainer__2, .multiImageContainer__3 {
    position: absolute;
    text-align: center;
    
}

.heroImageContainer {
    width: 80vw;
    height: 30vh;
    margin: 0 auto;
    padding-top: 2vh;
    max-width: 1280px;
    

}
.heroImage{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0.2rem;
    max-width: 1200px;
    max-height: 600px;
}

</style>