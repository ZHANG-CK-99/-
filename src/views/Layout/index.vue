<script setup>
import {ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue"
import MainContet from './MainContet.vue'
import SiderBar from "./SiderBar.vue";
import TopBar from "./TopBar.vue";
//组件挂载到节点上之前执行的函数
onBeforeMount(() => {
})

//组件挂载完成后执行的函数
onMounted(() => {
})

//组件更新之前执行的函数
onBeforeUpdate(() => {
})

//组件更新完成之后执行的函数
onUpdated(() => {
})

//组件卸载之前执行的函数
onBeforeUnmount(() => {
})

//组件卸载完成后执行的函数
onUnmounted(() => {
})

</script>

<template>
  <div class="container">
    <div class="top">
      <top-bar></top-bar>
    </div>
    <div class="main-view">
      <div class="main-left">
        <sider-bar></sider-bar>

        <div class="bottom-view">
          <div class="spaceInfo">空间容量信息</div>
        </div>
      </div>
      <div class="main-right">
        <MainContet></MainContet>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .container{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
      .top{
        width: 100%;
        height: 60px;
        background: #2c3e50;
      }
    .main-view{
      display: flex;
      box-sizing: border-box;
      .main-left{
        position: relative;
        width: 300px;
        height: calc(100vh - 60px);
        background: #282828;

        .bottom-view{
          position: fixed;
          bottom: 0;
          left: 0;
          //width: 100%;
          height: 40px;
          background-color: #282828;
          display: flex;
          .spaceInfo{
            font-size: 12px;
            color: #fff;
          }
        }
      }
      .main-right{
        width: calc(100% - 300px);
        padding: 20px;
        box-sizing: border-box;
      }
    }
  }
</style>

