<template>
  <div class="login">
    <el-form
  class="loginForm"
    :model="sizeForm"
    label-width="auto"
    :label-position="labelPosition"
    :size="size"
  >
  <h1 class="title">TEST系统</h1>
    <el-form-item label="name">
      <el-input v-model="sizeForm.name" />
    </el-form-item>
    <el-form-item label="password">
      <el-select
        v-model="sizeForm.password"
        placeholder="please select your zone"
      >
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button :class="active?'active':''" class="loginBtn" @click="onSubmit">login</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { ComponentSize, FormProps } from 'element-plus'

const size = ref<ComponentSize>('default')
const labelPosition = ref<FormProps['labelPosition']>('right')

const sizeForm = reactive({
  name: '',
  password:'',
})
const active=ref(false)

function onSubmit() {
  active.value = true
 console.log(6666);

}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}
.login{
  width:100vw;
  height: 100vh;
  background: url('../assets/loginBg.jpg');
  background-position: center;
}
.loginForm{
  position: absolute;
  user-select: none;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background-image: linear-gradient(
       var(--rotate)
       , #5ddcff, #3c67e3 43%, #4e00c2);
  border-radius: 8px;
  animation: spin 2.5s linear infinite;
  padding: 40px 20px;
  .title{
    text-align: center;
    margin-bottom: 20px;
  }
  .loginBtn{
    width: 87%;
    margin-left: 13%;
    font-size: 16px;
    background-image: linear-gradient(to right, red, aqua, #00008B);

  }
  .active{
    background-image: linear-gradient(to right, green, #1804ed, yellow);
    color: #fff;
  }
  &::before{
     content: "";
     position: absolute;
     width: 99%;
     height: 98%;
     border-radius: 8px;
     background-color: #fff;
     z-index: -1;
     top: 1%;
     left: .5%;
  }
}
</style>
