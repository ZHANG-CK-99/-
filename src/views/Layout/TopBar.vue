<script setup>
import {ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue"
import {storeToRefs} from 'pinia'
import useStore from '@/stores'
import {useRoute,useRouter} from "vue-router";
import {useNavStore} from "@/stores/modules/Navgate";

// 侧边栏数据
const {navUser} = useStore()

const {tagsViewList,currentTagView} = storeToRefs(navUser)

const route = useRoute()
const router = useRouter()
const tabChange = (TabPaneName) => {
    router.push(TabPaneName)
}


const tabRemove = (TabPaneName) => {
  console.log(TabPaneName,'TabPaneName')
  navUser.deleteTagView(TabPaneName)
}

watch(route,() => {
  navUser.addTagView(route)
  navUser.changeTagView(route.path)
},{
  immediate:true,
  deep:true
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
    <el-tabs
        v-model="currentTagView"
        type="card"
        class="demo-tabs"
        @tab-change="tabChange"
        @tab-remove="tabRemove"
    >
      <el-tab-pane
          v-for="item in tagsViewList"
          :key="item.path"
          :label="item.title"
          :name="item.path"
          :closable="item.affix"

      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
 :deep(.el-tabs__item){
    background: #ffffff;
  }
.demo-tabs > .el-tabs__content {
  background-color: #f2f2f2;
  padding: 32px;
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
}

</style>
