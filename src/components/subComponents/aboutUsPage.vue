<script>
 export default {
  name: 'AboutUsPage',
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
    const sewingPath = require('../../assets/sewing.jpg')
    const opineoPath = require('../../assets/opineo.png')
    const laurPath = require('../../assets/laur.jpg')
    const imagePath2 = require('../../assets/jakosc.jpg')

    return {
        sewingPath,
        opineoPath,
        laurPath,
        imagePath2
    }
  }
}

</script>



<template>
    <div class="aboutUsWrapper">
        <h1>O naszej firmie</h1>
        <p>Nasza firma oferuje szeroką gamę wysokiej jakości bielizny damskiej i męskiej. Nasze produkty są         wykonane z najlepszych materiałów, dzięki czemu są trwałe, komfortowe i eleganckie.</p>

        <p>Nasze damskie produkty to m.in. staniki, figi, rajstopy, skarpety, itp. Dostępne są one w różnych rozmiarach, kolorach i fasonach, co pozwala na dopasowanie ich do indywidualnych potrzeb i gustów klientek. Natomiast w naszej ofercie dla mężczyzn znajdziesz skarpety, bieliznę termoaktywną, bokserki i slipy.</p>
        
        <div class="sewingWrapper">
            <img :src="imagePath2">
        </div>
        

        <p>Jesteśmy przekonani, że nasza bielizna jest jedną z najlepszych na rynku. Przykładamy ogromną wagę do jakości naszych produktów, dlatego każdy z nich jest starannie przetestowany przed wprowadzeniem do sprzedaży.</p>
            
        <p>Naszym celem jest zapewnienie naszym klientom bielizny, która nie tylko będzie wyglądać dobrze, ale przede wszystkim będzie wygodna i trwała. Dlatego też, nasza bielizna jest idealna zarówno na co dzień jak i na specjalne okazje.
            
        Warto wspomnieć, że dbamy o środowisko i zdrowie klientów, dlatego stosujemy ekologiczne rozwiązania przy produkcji naszych produktów.</p>
            
        <p>Jeśli szukasz bielizny, która spełni Twoje wymagania pod względem jakości, wygody i stylu, zapraszamy do zapoznania się z naszą ofertą. Jesteśmy przekonani, że każdy znajdzie coś dla siebie.</p>
        <div class="sewingWrapper">
            <img :src="sewingPath">
        </div>
        
        <br/>
        <p>Nasza firma jest dumna z uzyskanych nagród i wyróżnień od naszych klientów i branży. Uzyskaliśmy nagrodę za najlepszą jakość produktów oraz za innowacyjność. Cieszymy się, że nasza bielizna jest tak chętnie wybierana przez klientów, co potwierdza, że oferujemy produkty na najwyższym poziomie.

        Nasza marka jest również doceniona przez klientów za styl i elegancję. Nasze produkty zdobyły wiele pozytywnych opinii i recenzji, co tylko potwierdza ich wysoką jakość.</p>
            
        <p>
        Jesteśmy bardzo dumni z uzyskanych przez nas nagród i wyróżnień, ponieważ są one dowodem na to, że nasza firma jest liderem w branży i że oferujemy produkty najwyższej jakości.
            
        Jesteśmy wdzięczni za każde wyróżnienie i opinię, które otrzymujemy od naszych klientów, ponieważ pozwala nam to rozwijać naszą działalność i dostarczać jeszcze lepsze produkty.
        </p>
        <div class="rewardsWrapper">
            <img class="rewards" :src="laurPath">
            <img class="rewards" :src="opineoPath">
        </div>
    </div>
</template>



<style scoped>

h1{
    text-align: center;
}

.aboutUsWrapper{
    width: 100%;
    margin: 0 auto;
}

.aboutUsWrapper p {
    width: 90%;
    margin: 0 auto;
    padding: 0.5rem 0;
}
.sewingWrapper{
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    justify-content: center;
}

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-height: 250px;
    max-width: 800px;
}

.rewardsWrapper{
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 2vh;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    gap: 5vw;
}
.rewards{
    height: 50%;
    width: 50%;
    object-fit: contain;
    max-height: 200px;
    max-width: 200px;

}

@media screen and (min-width : 800px) {
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        max-height: 400px;
        max-width: 800px;
    }
}
</style>