<script setup lang="ts">

import { ref } from 'vue';
import {user} from "@/store/storeuser"

let username = ref("张三儿子")
let password = ref("111")
let sign = ref(false)
const emit = defineEmits(['login-success','page-to-send']);

const login = () => {
  for(let i=0; i<user.userList.length; i++){
    if(user.userList[i].name == username.value && user.userList[i].password == password.value ){
      sign.value = true
      user.userIndex = i
      console.log("当前用户序号：",user.userIndex)
      alert('登录成功，点击回车进行跳转')
      break
    }
  }
  if(!sign.value){
    sign.value = false
    alert('用户名或密码错误')
  }
  emit('login-success',sign.value)
}

function register(){
  emit('page-to-send','Register')
}
</script>

<template>
<!--  <div class="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat" style="background-image: url('your-background-image.jpg');"> -->
  <div class="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat" style="background-color: rgb(235, 246, 244);">
    <div class="relative py-12 px-8 sm:px-12 rounded-3xl shadow-md flex flex-col items-center"
         style="max-width: 480px; width: 100%; border: 4px solid rgb(89, 198, 186); background-color: rgb(89, 198, 186);">
     <img src="../img/twinkle.png" alt="Twinkle icon" class="absolute top-0 left-0" style="width: 180px; height: auto; transform: translate(-50%, -50%);">
      <h1 class="text-4xl font-black text-black mt-[-15px] mb-8">登录</h1>
      <label for="username" class="self-start mb-3 text-2xl font-bold text-black">请输入用户名：</label>
      <input id="username" class="mb-5 p-4 border-2 border-gray-300 w-full text-lg font-semibold text-gray-700 focus:outline-none"
             v-model="username"
             type="text"
             placeholder="请输入用户名：">
      <label for="password" class="self-start mb-3 text-2xl font-bold text-black">请输入密码：</label>
      <input id="password" class="mb-5 p-4 border-2 border-gray-300 w-full text-lg font-semibold text-gray-700 focus:outline-none"
             v-model="password"
             type="password"
             placeholder="请输入密码：">
      <button class="w-full py-3 bg-yellow-400 text-2xl font-bold text-black rounded-2xl hover:bg-yellow-500"
              @click="login">登录</button>
<!--      <p class="mt-5 text-lg font-semibold text-black">还没有账号吗？注册一个吧！</p>-->
      <button class="mt-5 text-lg font-semibold text-black bg-transparent border-none cursor-pointer hover:underline focus:outline-none" @click="register">
        还没有账号吗？注册一个吧！
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>


<style scoped>

</style>