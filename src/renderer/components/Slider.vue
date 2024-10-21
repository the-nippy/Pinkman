<template>
  <div class="slider">
    <div v-for="item in items" :key="item.id" class="slider_item">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },

  },
  data() {
    return {
      items: [
        { name: '会话1' },
        { name: '会话2' },
        { name: '会话3' },
      ]
    }
  }
};
</script>

<style scoped>
.slider {
  width: 10%;
  min-width: 96px;
  height: 100%;
  border-right: solid #777 1px;
}
.slider_item{
  height: 60px;
  border-bottom: 1px solid #999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
}
</style>