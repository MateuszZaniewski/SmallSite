<template>
  <div :class="{'backgroundTransparency' : isToggled}">
    <div @click="toggleMenu" class="wrapper">
        <span :class="{ open : isToggled}" class="hamburger"></span>
    </div>
    <div class="logowrapper">
      <img id="mainLogo" :src="logoPath">
        <div :class="{ 'menu-open' : isToggled}" class="headerListArea">
          <ul class="headerList">
            <li v-for="element in headerListofAnchors" :key="element">{{element}}</li>
          </ul>
        </div>
    </div>
      <img id="ramka" :src="ramkaPath">
  </div>
  <div v-if="isToggled" class="slidingMenu">
    <ul>
      <li v-for="element in headerListofAnchors" :key="element">{{element}}</li>
    </ul>
  </div>
  <div>
    <p style="color: red">xdd</p>
    <p style="color: red">xdd</p>
    <p style="color: red">xdd</p>
    <p style="color: red">xdd</p>
    <p style="color: red">xdd</p>
    <p style="color: red">xdd</p>
    
  
  </div>


</template>

<script>

export default {
  name: 'MainHeader',
  props: {
    
  },
  components: {

  },
  data() {

    return {
      isToggled : false
    }
  },
  methods: {
    toggleMenu() {
      this.isToggled = !this.isToggled
    }


  },
  setup() {
    const logoPath = '/assets/logos2.png'
    const hamburgerPath = '/assets/hamburger.png'
    const heroImage = '/assets/heroImage.jpg'
    const ramkaPath = '/assets/ramka2.png'
    const headerListofAnchors = ['O nas', 'Kolekcja', 'Sklep Online', 'Kontakt']
  
    return {
      logoPath,
      headerListofAnchors,
      hamburgerPath,
      heroImage,
      ramkaPath,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  width: 90%;
  height: calc(100vh - 90px);
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 100;
  position: absolute;
}

.slidingMenu ul {
  list-style: none;
  padding: 0;
}

.slidingMenu ul li {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid rgb(215, 176, 111);
}

.slidingMenu ul li:hover {
    color:rgb(215, 176, 111);
    cursor: pointer;
}

.backgroundTransparency {
  opacity: 0.5;
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
    height: 100%;
    width: 30%;
    padding-left: 3vw;
    cursor: pointer;
  }
  
  #ramka {
    width: 100%;
    height: 6vw;
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
    font-size: 1.8vw;
  }

  .headerList li:hover {
    color:rgb(215, 176, 111);
    cursor: pointer;
  }
}
</style>
