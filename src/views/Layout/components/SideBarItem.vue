<script setup>
import {ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue"
import SideBarItem from "@/views/Layout/components/SideBarItem.vue";
const props = defineProps({
  item:{
    type:Object,
    default:() => ({})
  }
})

// console.log(props.item,'item')
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
          <span>{{props.item.meta.title}}</span>
        </template>
        {{props.item.chidren}}
        <SideBarItem v-for="child in props.item.children" :key="child.path" :item="child"></SideBarItem>
      </el-sub-menu>
    </div>
    <div v-else-if="props.item.component">
      <el-menu-item :index="props.item.path">
        <el-icon><icon-menu/></el-icon>
        <span>{{props.item.meta.title}}</span>
      </el-menu-item>
    </div>

  </div>
</template>

<style lang="less" scoped></style>
