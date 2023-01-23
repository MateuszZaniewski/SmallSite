<script>
 

 export default {
  name: 'ContactPage',
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
    const contactImagePath = require('../../assets/kontakt.jpg')
    const contactImage1Path = require('../../assets/forma.png')
    
    return {
        contactImagePath,
        contactImage1Path
  }
}
}
</script>

<template>
    <div>
        <h1>Kontakt</h1>
        <img class="contactImg" :src="contactImagePath"/>
    </div>
    <div class="flexHighRes">
        <div class="contact">
            <p class="contact__bb">
                contact@vivisence.com
            </p>

            <p class="contact__bb">
                Kontri Sp. z o.o.
                ul. Jacka Kuronia 3
                15-569 Białystok
            </p>
            <p class="contact__bb">
                NIP: 9661848306
                REGON: 200084060
                Sąd Rejonowy w Białymstoku XII Wydział Krajowego
                Rejestru Sądowego KRS 0000258273
                Kapitał spółki: 350 000 zł opłacony w całości.
            </p>
                
        </div>
        <div class="formaWrapper">
            <img class="formaImg" :src="contactImage1Path">
        </div>
    </div>
</template>

<style scoped>
h1{
    text-align: center;
}
p{
    width: 90%;
    margin: 0 auto;
}
.contactImg{
    width: 100%;
    margin: 0 auto;
}
.formaImg{
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding-top: 10px;
    
}
.formaWrapper{
    margin: 0 auto;
    max-width: 800px;
    width: 90%;
}

.contact__bb{
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 1px solid rgb(215, 176, 111);
}

@media (min-width: 700px) {

.flexHighRes{
    display: flex;
    width: 90%;
    margin: 0 auto;
}

.contact{
    width: 50%;
}

.formaWrapper{
    width: 50%;
}

}
</style>