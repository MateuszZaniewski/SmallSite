<template>
  <div class="headerWrapper" :class="{'backgroundTransparency' : isToggled}">
    <div @click="toggleMenu" class="wrapper">
        <span :class="{ open : isToggled}" class="hamburger"></span>
    </div>
    <div class="logowrapper">
      <router-link to="/"><img @click="displayHomePage" id="mainLogo" :src="logoPath"></router-link>
        <div :class="{ 'menu-open' : isToggled}" class="headerListArea">
          <ul class="headerList">
            <router-link to="/about"><li @click="setBackgroundtoScroll">O nas</li></router-link>
            <router-link to="/collection"><li @click="setBackgroundtoScroll">Kolekcja</li></router-link>
            <router-link to="/contact"><li @click="setBackgroundtoScroll">Kontakt</li></router-link>
          </ul>
        </div>
    </div>
  </div>
  <div v-if="isToggled" class="slidingMenu">
    <ul>
      <router-link to="/about"><li @click="setBackgroundtoScroll">O nas</li></router-link>
      <router-link to="/collection"><li @click="setBackgroundtoScroll">Kolekcja</li></router-link>
      <router-link to="/contact"><li @click="setBackgroundtoScroll">Kontakt</li></router-link>
    </ul>
  </div>
</template>

<script>

import store from '../store'

export default {
  name: 'MainHeader',
  props: {
    
  },
  components: {

  },
  data() {

    return {
      isToggled : false,
      store
    }
  },
  methods: {
    toggleMenu() {
      this.isToggled = !this.isToggled
      document.body.style.overflow == 'hidden' ? document.body.style.overflow = 'scroll' : document.body.style.overflow = 'hidden'
    },
    setBackgroundtoScroll() {
      if(document.body.style.overflow == 'hidden'){
        document.body.style.overflow = 'scroll'
      }
    }
  },
  mounted() {
    
  },
  setup() {
    const logoPath = require('../assets/logos2.png')
    const hamburgerPath = require('../assets/hamburger.png')
    const heroImage = require('../assets/heroImage.jpg')
    const ramkaPath = require('../assets/ramka2.png')
  
    return {
      logoPath,
      hamburgerPath,
      heroImage,
      ramkaPath,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.headerWrapper{
  margin-top: 2vh;
  display: flex;
  padding-bottom: 0.5rem;
  border-bottom: 1px double #d49c3a;
}

.wrapper{
  display: flex;
  position: absolute;
  top: 6.944vw;
  left: 5.556vw;
}
.logowrapper{
  display: flex;
  justify-content: center;
}
.logowrapper a{
  display: flex;
  justify-content: center;
  color: black;
  text-decoration: none;
}
#mainLogo {
  height: 100%;
  width: 60%;
}
#heroImage{
  height: 300px;
  width: 100%;
}
#ramka {
  width: 100%;
  height: 25px;
  margin: 0 auto;
  padding-top: 10px;
}
.hamburger {
  width: 7.5vw;
  max-width: 37px;
  height: 0.278vw;
  max-height: 2px;
  background: black;
  position: relative;
}
.hamburger::after {
  content: '';
  position: absolute;
  top: min(-2.000vw, 12px);
  width: 8.333vw;
  max-width: 40px;
  height: 1px;
  background: inherit;
  

}
.hamburger::before {
  content: '';
  position: absolute;
  top: min(2.222vw, 12px);
  width: 8.333vw;
  max-width: 40px;
  height: 1px;
  background: inherit;
}
.headerListArea{
  display: none;
  width: 100%;
}

.headerList{
  display: none;
}

.open {
  width: 30px;
  transform: rotate(270deg);
  background: transparent;
  transition: all 0.5s ease-in-out;
}
.open::before {
      transform: rotate(45deg) translate(-1.389vw
      , -1.667vw
      );
      background-color: black;
      transition: all 0.5s ease-in-out;
}
.open::after {
      transform: rotate(-45deg) translate(-1.389vw
      , 1.389vw
      );
      background-color: black;
      transition: all 0.5s ease-in-out;
}

.slidingMenu {
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 30px);
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.856);
  position: absolute;
  overflow: hidden;
}

.slidingMenu ul {
  list-style: none;
  padding: 0;
}

.slidingMenu ul li {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #d49c3a;
  font-weight: bold;
}

.slidingMenu ul a {
  color: black;
  text-decoration: none;
}

.slidingMenu ul li:hover {
    color:rgb(215, 176, 111);
    cursor: pointer;
}

.backgroundTransparency {
  opacity: 0.5;
}

.noSlidingBackground{
  position: fixed;
}





@media (min-width: 700px) {


  .slidingMenu{
    display: none;
  }

  .wrapper{
    display: none;
  }
  
  .logowrapper{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 7vw;
    width: 90%;
    margin: 0 auto;
  }
  
  #mainLogo {
    padding-left: 3vw;
    cursor: pointer;
  }
  
  #ramka {
    width: 100%;
    height: 3vw;
    margin: 0 auto;
  }
  
  .hamburger {
    display: none;
  }
 
  .headerListArea{
    display: flex;
    border-left: 1px solid rgb(215, 176, 111);
  }
  .headerList{
    display: flex;
    align-items: center;
    list-style: none;
    gap: 6vw;
    font-size: min(1.8vw, 16px);
  }

  .headerList li:hover {
    color:rgb(215, 176, 111);
    cursor: pointer;
  }
}
</style>
