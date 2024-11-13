<template>
  <div id="app">
    <Slider :tasks="tasks"></Slider>

    <Main v-if="!currentTask" @add-task="addTask"></Main>
    <Content v-if="currentTask"></Content>

  </div>
</template>

<script>
import Slider from './components/Slider.vue';
import Main from './components/Main.vue';
import Content from './components/Content.vue'


export default {
  name: 'App',
  components: {
    Slider,
    Main,
    Content
  },
  data() {
    return {
      tasks: [],
      nextId: 1,
      currentTask: null
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push({ id: this.nextId++, ...task });
    },
    setCurrentTask(task) {
      this.currentTask = task;
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