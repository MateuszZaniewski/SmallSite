<template>
  <MainHeader/>
  <mainPage/>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import mainPage from './components/mainPage.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    mainPage,
  }
}

//<img alt="Vue logo" src="./assets/logo.png">

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
