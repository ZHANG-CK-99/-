<script setup>
import {ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue"
import SideBarItem from "@/views/Layout/components/SideBarItem.vue";
const props = defineProps({
  item:{
    type:Object,
    default:() => ({})
  }
})
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
  <div class="">
    <div v-if="props.item?.children?.length > 0">
      <el-sub-menu :index="props.item.name">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>{{props.item.meta.title}}}</span>
        </template>
        <SideBarItem v-for="child in props.item.chidren" :key="child.path" :item="child"></SideBarItem>
      </el-sub-menu>
    </div>
    <div v-else-if="props.item.component">
      <el-menu-item :index="props.item.path">
        <el-icon><icon-menu/></el-icon>
        <span>{{item.meta.title}}</span>
      </el-menu-item>

    </div>
<!--    <el-menu-item index="/dashboard">-->
<!--      <el-icon><icon-menu /></el-icon>-->
<!--      <span>面板页</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="/userManage">-->
<!--      <el-icon><icon-menu /></el-icon>-->
<!--      <span>用户管理</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="3" disabled>-->
<!--      <el-icon><document /></el-icon>-->
<!--      <span>Navigator Three</span>-->
<!--    </el-menu-item>-->
  </div>
</template>

<style lang="less" scoped></style>
