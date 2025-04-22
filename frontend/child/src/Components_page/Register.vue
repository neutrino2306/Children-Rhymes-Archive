<script setup lang="ts">

import { ref } from 'vue';
import Presets_1 from "@/Components_single/Presets_1.vue";
import Presets_2 from "@/Components_single/Presets_2.vue";
import Presets_3 from "@/Components_single/Presets_3.vue";
import Home from "@/Components_page/Home.vue";
import axios from "axios";

let username = ref('');
let password = ref('');
let pageName = ref("Register")
let sex = ref()
let userimg = ref('')

const getPage = (page: string) => {
  pageName.value = page;
  console.log(pageName.value);
}

const changeSex = (childSex:number)=>{
  sex.value = childSex
  console.log("sex in register is:"+ sex.value)
}

const emit = defineEmits(['page-to-send','selectSex','register']);/*'selectSex'用于和presets1页面进行sex传值，'register'用于在跳转到Home页面时，同时与后端数据库交互实现注册功能 */
const login = () => {
  emit('page-to-send','Login'); // 触发自定义事件以回到登录界面
};
async function register (page:string){
  const response = await axios.post('http://localhost:8080/UserController/addUser', null, {
    params: {
      username: username.value,
      password: password.value,
      sex: sex.value
    }
  })
  if(response.data.userid!=null){
    console.log("注册成功")
    localStorage.setItem("userId", response.data.userid.toString())
    localStorage.setItem("userName", username.value)
    pageName.value = "Home"
  }else{
    console.log("注册失败")
  }
}

/*以下是用户输入用户名和密码后检查是否有重复的功能，若有重复则提示*/
async function checkUser(){
  const response = await axios.post("http://localhost:8080/UserController/findByUsername", null, {
    params: {
      username: username.value
    }
  })

  if(response.data.length !== 0){
    alert("这个昵称已经有人用啦，换一个昵称吧！")
  }else{
    pageName.value = "Page1"
  }
}

</script>

<template>
  <!--  <div class="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat" style="background-image: url('your-background-image.jpg');"> -->
  <div v-if="pageName == 'Register'"
       class="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat" style="background-color: rgb(235, 246, 244);">
    <div class="relative py-12 px-8 sm:px-12 rounded-3xl shadow-md flex flex-col items-center"
         style="max-width: 480px; width: 100%; border: 4px solid rgb(89, 198, 186); background-color: rgb(89, 198, 186);">
      <img src="../img/chicken.png" alt="Twinkle icon" class="absolute top-0 left-0" style="width: 130px; height: auto; transform: translate(-50%, -50%);">
      <h1 class="text-4xl font-black text-black mt-[-15px] mb-8">注册</h1>
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
              @click="checkUser()">注册</button>
      <button
          class="mt-5 text-lg font-semibold text-black bg-transparent border-none cursor-pointer hover:underline focus:outline-none"
          @click="login"
      >
        已经有账号了？直接登录吧！
      </button>
    </div>
  </div>
  <Presets_1 v-if="pageName == 'Page1'" @page-to-send="getPage" @select-sex="changeSex" class="z-0"></Presets_1>
  <Presets_2 v-if="pageName == 'Page2'" @page-to-send="getPage" class="z-5"></Presets_2>
  <Presets_3 v-if="pageName == 'Page3'" @register="register" class="z-10"></Presets_3>
  <home v-if="pageName == 'Home'"></home>



</template>

<style scoped>
</style>


<style scoped>

</style>