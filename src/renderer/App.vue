<template>
  <div id="app">
    <Slider :message="sliderData"></Slider>
    <Main></Main>
  </div>
</template>

<script>
import Slider from './components/Slider.vue';
import Main from './components/Main.vue';




export default {
  name: 'App',
  components: {
    Slider,
    Main,
  },
  data() {
    return {
      sliderData: 'xxx',
      // mainConfig: MainFnConfig,
    }
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

h1 {
  color: #42b983;
}
</style>