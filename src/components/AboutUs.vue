<script>
  

  export default {
  name: 'AboutUs',
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
    const workImagePath1 = require('../assets/work1.jpg')
    const workImagePath2 = require('../assets/work2.jpg')
    const workImagePath3 = require('../assets/work3.jpg')

    return {
        workImagePath1,
        workImagePath2,
        workImagePath3
    }
  }
}

</script>

<template>
    <div class="aboutUsWrapper">
        <div class="aboutUsSection1">
            <div class="aboutUsSection1__container">
                <h3>Z miłości do bielizny</h3>
                <p>VIVISENCE powstała z miłości do bielizny. Klasyczne, ponadczasowe modele, w których kobieta czuje się komfortowo i szczęśliwie to nasze motto. Wsłuchujemy się w głosy naszych Klientek i dopasowujemy się do ich potrzeb. Nieustannie śledzimy najnowsze trendy, uczestniczymy w międzynarodowych targach mody i konferencjach, aby sprostać najwyższym oczekiwaniom. Stawiamy sobie codziennie wyzwania, żeby uszczęśliwić nasze Klientki. Bielizna to nasza pasja.</p>
            </div>
            
            <img class="workImage" :src="workImagePath1">
        </div>
        <div class="aboutUsSection2">
            <div class="aboutUsSection2__container">
                <h3>Jakość przede wszystkim</h3>
                <p>Niezawodność to nasze drugie imię. Bielizna VIVISENCE wykonana jest z bardzo starannie wyselekcjonowanych surowców wysokiej jakości. Eleganckie koronki i hafty oraz delikatne, przyjemne w dotyku materiały powodują, że kobieta czuje się w nich pewna siebie i szczęśliwa. Do każdego produktu podchodzimy indywidualnie. Słuchamy naszych Klientek i dbamy o każdy szczegół. Najwyższa jakość tkwi w najmniejszych detalach.</p>
            </div>
            
            <img class="workImage" :src="workImagePath2">
        </div>
        <div class="aboutUsSection3">
            <div class="aboutUsSection3__container">
                <h3>Technologia</h3>
                <p>VIVISENCE to przede wszystkim perfekcyjnie wykonane konstrukcje biustonoszy w szerokiej gamie rozmiarowej. Technologia wsparta wiedzą i doświadczeniem to nasza najmocniejsza strona. Do produkcji wykorzystujemy tylko i wyłącznie wyselekcjonowane surowce od renomowanych producentów. Ubieramy każdy, nawet najtrudniejszy biust. Specjalizujemy się zarówno w klasycznych konstrukcjach jak i w specjalistycznych biustonoszach.</p>
            </div>
            
            <img class="workImage" :src="workImagePath3">
        </div>
        
    </div>
</template>


<style scoped>

.aboutUsWrapper{
    width: 90%;
    margin: 0 auto;
    text-align: center;
}

.aboutUsWrapper h3{
    text-align: center;
    padding-top: 2vh;
    border-top: 1px solid rgb(212, 156, 58);
}

.aboutUsWrapper p{
    text-align: left;
}

.aboutUsSection1, .aboutUsSection2, .aboutUsSection3 {
    margin: 0 auto;
}

.workImage{
    max-width: 850px;
    width: 90%;
    max-height: 450px;
    margin: 0 auto 2vh auto;
}

</style>