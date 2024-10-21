<template>
  <div class="main">
    <h2>主面板功能集合</h2>
    <div v-for="item in items" :key="item.id">
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import { MainFnConfig } from '../constant';

console.info('[MainFnConfig]', MainFnConfig);

export default {
  name: 'Main',
  data() {
    return {
      items: MainFnConfig
    }
  }
};
</script>

<style scoped>
.main {
  flex: 1;
  padding: 24px;
}

h2 {
  color: green;
}
</style>