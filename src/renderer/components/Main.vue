<template>
  <div class="main">
    <div class="main_header">
      <h2>Pinkman, dev-tool</h2>
      <!-- <button @click="submitTask">添加任务</button> -->
    </div>
    <div class="main_contents">
      <div v-for="item in items" :key="item.id" class="block">
        <div class="item_header">
          <i :class="['iconfont block_icon', item.icon]" aria-setsize="30"></i>
          <div class="block_name">
            {{ item.name }}
          </div>
          <div class="block_divide"></div>
        </div>
        <div class="item_contents">
          <div v-for="ele in item.contents" :key="ele.name" class="content" @click="submitTask(ele)">
            <div v-if="ele.icon.includes('http')" class="icon_wrapper">
              <img :src="ele.icon" />
            </div>
            <div v-else class="icon_wrapper">
              <i :class="['iconfont', ele.icon]" :style="{ color: ele.icon_color }"></i>
            </div>
            <div>{{ ele.desc }}</div>
            <div class="detail">{{ ele.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MainFnConfig } from "../constant";

// console.info("[MainFnConfig]", MainFnConfig);

export default {
  name: "Main",
  data() {
    return {
      items: MainFnConfig,
      taskName: 'xxx',
    };
  },

  methods: {
    submitTask(item) {
      if (this.taskName.trim()) {
        this.$emit('add-task', item);
        this.$emit('set-currenttask', item)
      }
    },
  }
};
</script>

<style scoped>
.iconfont {
  font-size: 28px;
}

.block_icon {
  margin-right: 8px;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  background: #f4f4f4;
}

.block {
  margin-bottom: 40px;
}

.block_name {
  font-size: 18px;
}

.block_divide {
  height: 2px;
  margin-left: 12px;
  background: #fff;
  width: 100%;
}

.main_header {
  position: fixed;
  z-index: 9;
  background: #fff;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
  padding: 0 16px;
}

.main_contents {
  flex: 1;
  margin-top: 64px;
  /* background: #; */
  padding: 24px;
  max-height: calc(100% - 64px);
  overflow: scroll;
}

.item_header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item_contents {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}


.content {
  background: #fff;
  min-width: 160px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 240px;
  cursor: pointer;
  /* box-sizing: content-box; */
  box-sizing: border-box;
}

.content:hover {
  border: 1px solid #4d7783;
  box-shadow: 2px 2px 8px rgb(172, 185, 179);
}

.content:hover .iconfont {
  font-size: 32px;
  transition: all 0.4s;
}

.detail {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
}

img {
  width: 80px;
}

.icon_search {
  color: rgb(27, 128, 128)
}

.detail {}
</style>
