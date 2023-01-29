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
    this.intervalId = setInterval(this.startLoop, 5000);
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

                <div v-show="currentSlide == 0" class="multiImageContainer__1">
                    <div class="heroImageContainer">
                        <img v-once :src="heroImagePath" class="heroImage">
                    </div>
                    <h1>Ponadczasowa klasyka</h1>
                    <p>VIVISENCE perfekcyjnie łączy klasykę z elegancją. Subtelnie przemyca akcenty najnowszych trendów, dodając bieliźnie zmysłowości i delikatności. W kolekcji królują stonowane, ponadczasowe, bazowe kolory idealne dla kobiety w każdym wieku.</p>
                </div>

                <div v-show="currentSlide == 1" class="multiImageContainer__2">
                    <div class="heroImageContainer">
                        <img v-once :src="heroImagePath1" class="heroImage">
                    </div>
                    <h1>Gwarancja jakości</h1>
                    <p>Bielizna VIVISENCE wykonana jest z bardzo starannie wyselekcjonowanych surowców wysokiej jakości. Swoje doświadczenie w branży bieliźniarskiej przekładamy na najwyższą jakość produktów. Nasza bielizna pakowana jest w eleganckie pudełka, które doskonale nadają się na prezent.</p>
                </div>

                <div v-show="currentSlide == 2" class="multiImageContainer__3">
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


.multiImageContainer__1, .multiImageContainer__2, .multiImageContainer__3 {
    text-align: center;
    padding-bottom: 10px;
    height: 470px;
    max-height: 470px;
    width: 90%;
    margin: 0 auto;
}

.heroImageContainer {
    width: 80%;
    height: 200px;
    margin: 0 auto;
    padding-top: 5px;
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

p{
    
    width: 90%;
    margin: 0 auto;
}


@media (min-width: 700px) {

    .multiImageContainer__1, .multiImageContainer__2, .multiImageContainer__3 {
        text-align: center;
        padding-bottom: 10px;
        height: 380px;
        max-height: 380px;
    }


}

</style>