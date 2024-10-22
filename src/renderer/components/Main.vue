<template>
  <div class="main">
    <div class="main_header">
      <h2>Pinkman, dev-tool</h2>
    </div>
    <div class="main_contents">
      <div v-for="item in items" :key="item.id" class="block">
        <div class="item_header">
          <i :class="['iconfont', item.icon]" aria-setsize="30"></i>
          <div class="">
            {{ item.name }}
          </div>
        </div>
        <div class="item_contents">
          <div v-for="ele in item.contents" :key="ele.name">
            <div class="detail">{{ ele.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MainFnConfig } from "../constant";

console.info("[MainFnConfig]", MainFnConfig);

export default {
  name: "Main",
  data() {
    return {
      items: MainFnConfig,
    };
  },
};
</script>

<style scoped>

.iconfont{
  width: 28px;
  height: 28px;
}

.main {
  flex: 1;
}
.block{
  margin-bottom: 40px;
}

.main_header {
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
  padding: 0 16px;
}

.main_contents {
  padding: 24px;
}

.item_header{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item_contents {
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon_search{
  color:rgb(27, 128, 128)
}

.detail{
  margin-right: 20px;
}

</style>
