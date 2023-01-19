<script>
  

  export default {
  name: 'FooterMain',
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
    const footerListofAnchors = ['O nas', 'Kolekcja', 'Sklep Online', 'Kontakt', 'Polityka Prywatnosci']
    const facebook = require('../assets/facebook.svg')
    const instagram = require('../assets/instagram.svg')
    const tiktok = require('../assets/tiktok.svg')

    return {
        footerListofAnchors,
        facebook,
        instagram,
        tiktok
    }
  }
}
</script>

<template> 
    <footer>
        <div class="footerLinks">
            <ul>
                <li v-for="item in footerListofAnchors" :key="item">{{item}}</li>
            </ul> 
        </div>
        <div class="footerSocials">
            <img :src="facebook">
            <img :src="instagram">
            <img :src="tiktok">
        </div>
        <div>
            <p>&copy; Wszelkie prawa zastrzeżone - prywatny projekt : Mateusz Zaniewski </p>
        </div>
    </footer>
</template>

<style scoped>

footer{
    background: #d49c3a;
    padding-bottom: 1vh;
}

footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
    color: rgb(243, 242, 242);
    display: flex;
    flex-flow: column;
    align-items: center;
}

footer ul li{
    width: fit-content;
}

footer ul li:hover {
    color:black;
    cursor: pointer;
}

.footerSocials img{
    height: 30px;
    width: 30px;
}

.footerSocials img:hover{
    scale: 1.2;
    cursor: pointer;
}

.footerSocials {
    display: flex;
    justify-content: center;
    gap: 15px;
}

p{
    margin: 0;
    padding-top: 1vh;
    text-align: center;
}

@media (min-width: 700px){
    footer ul{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        gap: 2vw;
        padding: 2vh 0;
    }

}

</style>