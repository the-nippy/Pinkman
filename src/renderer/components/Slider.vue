<template>
  <div class="slider">
    <div v-for="task in tasks" :key="task.id" class="slider_item">
      {{ task.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },


};
</script>

<style scoped>
.slider {
  width: 10%;
  min-width: 200px;
  height: 100%;
  overflow-y: scroll;
  border-right: solid #f3f3f3 2px;
  scrollbar-width: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

.slider_item {
  height: 60px;
  border-bottom: 1px solid #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
  cursor: pointer;
}
</style>