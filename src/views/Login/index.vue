<script setup>
import { ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue"
const form = ref({
  password:'', //账号
  account:'' //密码
})
//组件挂载到节点上之前执行的函数
onBeforeMount(()=>{})

//组件挂载完成后执行的函数
onMounted(()=>{})

//组件更新之前执行的函数
onBeforeUpdate(()=>{})

//组件更新完成之后执行的函数
onUpdated(()=>{})

//组件卸载之前执行的函数
onBeforeUnmount(()=>{})

//组件卸载完成后执行的函数
onUnmounted(()=>{})

</script>

<template>

  <div class="main">
    <div class="text">

      <el-form :model="form" label-width="120px">
        <el-form-item label="账号：">
          <el-input v-model="form.account" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.password" />
        </el-form-item>
      </el-form>
      <div class="login">
        <el-button type="primary">
          登录
        </el-button>
      </div>
    </div>
  </div>

</template>

<style lang="less" scoped>
.main{
  width: 100%;
  height: 100%;
  .text{
    width: 400px;
    height: 400px;
    padding: 100px 50px 20px 20px;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 10px;
  }
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
  }
}

</style>
