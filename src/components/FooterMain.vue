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
    const facebook = require('../assets/facebook.svg')
    const instagram = require('../assets/instagram.svg')
    const tiktok = require('../assets/tiktok.svg')
    const logoPath = require('../assets/logos2.png')
    const ramkaPath = require('../assets/ramka2.png')

    return {
        facebook,
        instagram,
        tiktok,
        logoPath,
        ramkaPath
    }
  }
}
</script>

<template> 
    <img id="ramka" :src="ramkaPath">
    <footer> 
        <div class="footerLinks">
            <ul>
                <router-link to="/about"><li>O nas</li></router-link>
                <router-link to="/collection"><li>Kolekcja</li></router-link>
                <router-link to="/onlinestore"><li>Sklep Online</li></router-link>
                <router-link to="/contact"><li>Kontakt</li></router-link>
            </ul> 
        </div>
        <div class="footerRest">
            <div class="footerLogo">
                <router-link to="/"><img @click="displayHomePage" id="mainLogo" :src="logoPath"></router-link>
            </div>
            <div class="footerSocials">
                <img :src="facebook">
                <img :src="instagram">
                <img :src="tiktok">
            </div>
        </div>
        
    </footer>
</template>
<!-- background: #d49c3a; -->
<style scoped>

#ramka {
    width: 100%;
    height: 25px;
    margin: 0 auto;
    padding-top: 10px;
  }

footer{
    padding-bottom: 1.5vh;
    padding-top: 1vh;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}


footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
    color: rgb(243, 242, 242);
}


footer ul a {
    width: fit-content;
    color: #d49c3a;
    text-decoration: none;
    
}

footer ul li{
    width: fit-content;
}

footer ul li:hover {
    scale: 1.1;
    cursor: pointer;
}

.footerSocials img{
    height: 20px;
    width: 20px;
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

.footerLogo {
    width: 100%;
    margin: 0 auto;
    display: flex;
}

.footerLogo a {
    display: flex;
    align-items: center;
}

#mainLogo {
    width: 100%;
    object-fit: contain;
    max-width: 300px;
}

.footerRest {
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    justify-content: space-around;
}

@media (min-width: 700px){


    footer ul{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        gap: 2vw;
        padding: 2vh 0;
    }

    .footerRest {
        display: flex;
        flex-flow: row nowrap;
        width: 40%;
        justify-content: center;
        gap: 2rem;
    }

    .footerLogo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .footerSocials {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    .footerSocials img{
        height: 30px;
        width: 30px;
    }
    
    .footerSocials img:hover{
        scale: 1.2;
        cursor: pointer;
    }

    #mainLogo {
        max-width: 300px;
        
    }

    #ramka {
        width: 100%;
        height: 3vw;
        margin: 0 auto;
      }

}

</style>