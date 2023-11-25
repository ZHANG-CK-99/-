<script setup>
import {ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,getCurrentInstance} from "vue"
import {useRoute} from 'vue-router'
import SideBarItem from "@/views/Layout/components/SideBarItem.vue";
const instance = getCurrentInstance()
import useStore from '@/stores'
const route = useRoute()

const handleOpen = (key,keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

// 移除标签页


const routerActive = toRef(route,'path')

//导入路由
const {userRole} = useStore()
const {roles,routes} = storeToRefs(userRole)

// 优化变成上面的写法就在于toRef接的是引用地址
// ref和toRef的区别
// (1) ref本质是拷贝，修改响应式数据不会影响原始数据；toRef的本质是引用关系，修改响应式数据会影响原始数据
// (2) ref数据发生改变，界面会自动更新；toRef当数据发生改变是，界面不会自动更新
// (3) toRef传参与ref不同；toRef接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性

// const routerActive = ref(route,'path')
// watch(route,() => {
//   routerActive.value = route.path
// },{
//   deep:true
// })
// 路由数据

const myRoutes = ref([])
// console.log(routes,routes,'myRoutes')
myRoutes.value = routes.value[0].children

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
    <el-menu
        class="el-menu-vertical-demo"
        :router="true"
        :default-active="routerActive"
        background-color="#282828"
        text-color="#fff"
    >
      <SideBarItem v-for="item in myRoutes" :item="item"></SideBarItem>
<!--      <el-menu-item index="/dashboard">-->
<!--        <el-icon><icon-menu /></el-icon>-->
<!--        <span>dashboard</span>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="/userManage">-->
<!--        <el-icon><icon-menu /></el-icon>-->
<!--        <span>userManage</span>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="3" disabled>-->
<!--        <el-icon><document /></el-icon>-->
<!--        <span>Navigator Three</span>-->
<!--      </el-menu-item>-->

    </el-menu>
  </div>
</template>

<style lang="less" scoped></style>
