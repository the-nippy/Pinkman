<template>
  <div id="app">
    <Slider :tasks="tasks"></Slider>

    <Main v-if="!currentTask" @add-task="addTask" @set-currenttask="setCurrentTask"></Main>
    <Content v-if="currentTask" :currentTask="currentTask"></Content>

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
    let tasks = [];
    const localTasks = localStorage.getItem('TASKS');
    localTasks && (tasks = JSON.parse(localTasks));
    return {
      tasks: tasks,
      nextId: 1,
      currentTask: null
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push({ id: this.nextId++, ...task });
      localStorage.setItem("TASKS", JSON.stringify(this.tasks))
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