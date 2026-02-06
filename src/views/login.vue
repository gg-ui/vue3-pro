<template>
  <div class="login">
  <el-form
   ref="loginFormRef"
    class="loginForm"
    :model="sizeForm"
    :rules="rules"
    label-width="auto"
    label-position="right"
  >
  <h1 class="title">TEST系统</h1>
    <el-form-item label="name" prop="name">
      <el-input v-model="sizeForm.name" @input="inputValue('name')" />
    </el-form-item>
    <el-form-item label="password" prop="password">
     <el-input @keydown.enter.native="submitForm(loginFormRef)" type="password" v-model="sizeForm.password" @input="inputValue('password')" />
    </el-form-item>
    <el-form-item>
      <el-button :class="active?'active':''" class="loginBtn" @click="submitForm(loginFormRef)">login</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus';
import router from '@/router';
interface sizeForm {
  name: string,
  password: string
}
const loginFormRef = ref<FormInstance>()
const sizeForm = reactive<sizeForm>({
  name: '',
  password:'',
})
const rules = reactive<FormRules<sizeForm>>({
  name: [{
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  }],
  password: [{
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }],
})

const active=ref(false)
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (sizeForm.name === 'admin' && sizeForm.password === '123456') {
        ElMessage.success('登录成功')
        active.value = true
        router.push('/')
      } else {
        ElMessage.error('用户名或密码错误,请重新输入')
        formEl.resetFields()
      }
    } else {
      ElMessage.error('请输入正确的用户名或密码')
    }
  })
}

// 限制输入
const inputValue = (val: string) => {
  if (/[^A-Za-z0-9]/.test(sizeForm[val])) {
  sizeForm[val]= sizeForm[val].replace(/[^A-Za-z0-9]/g,'')
}
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
