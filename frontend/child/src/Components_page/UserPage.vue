<script setup lang="ts">

import Recommend from "@/Components_single/Recommend.vue";
import SongList from "@/Components_single/SongList.vue";
import BackGoSearch from "@/Components_single/BackGoSearch.vue";
import ThreeDiv from "@/Components_single/ThreeDiv.vue";
import ThreeButton from "@/Components_single/ThreeButton.vue";
import LoveSongList from "@/Components_single/LoveSongList.vue";
import { ref } from 'vue';
import {user} from "@/store/storeuser";
import RecommendSongList from "@/Components_single/RecommendSongList.vue";

const emit = defineEmits(['page-to-send', 'display-song', 'display-song-list'])
const username = ref(localStorage.getItem("userName"));
console.log("username in user page is "+ username)
const isUsernameEditMode = ref(false);
const newUsername = ref('');

function onStartEditUsername() {
  isUsernameEditMode.value = true;
  newUsername.value = username.value??''; // 将当前用户名复制到新的引用中
}

function onEditUsername() {
  isUsernameEditMode.value = true;
  newUsername.value = username.value??'';
}

function onOkUsername() {
  isUsernameEditMode.value = false;
  username.value = newUsername.value;
  user.userList[user.userIndex].name = newUsername.value;
  console.log("表面修改的前端名字为：",user.userList[user.userIndex].name)
  //但这里用户名的修改也只是 在表面修改。数据库那边没有修改，登陆的时候还是需要原先的账户。现在只是实现了前端界面上用户名的一致。
}

function setDisplaySong(displaySong:any){
  emit('display-song',displaySong)
}

function setDisplaySongList(displaySongList:any){
  emit('display-song-list',displaySongList)

}
</script>


<template>
  <div class=" main grow h-200 flex flex-col overflow-auto">
    <back-go-search></back-go-search>
    <div class="h-50 flex-col ">
      <div class="flex items-center mt-20 my-3 " >
        <img class=" w-40 h-auto rounded-full" :src="user.userList[user.userIndex].pic"/>
        <div v-if="isUsernameEditMode" class="flex flex-col gap-3 ml-5">
          <input v-model="newUsername" class="outline-none text-8 w-100 rounded-xl pl-5 bg-gray-1"  />
          <div class="flex justify-around ">
            <button @click="onOkUsername" class="w-20 h-12 text-5  bg-[#DEF7F5] text-#67879F; rounded-xl ">确定</button>
            <button @click="isUsernameEditMode=false" class="w-20 h-12 text-5  bg-[#DEF7F5] text-#67879F; rounded-xl ">取消</button>
          </div>

        </div>
        <div v-else class="flex flex-col justify-start  ml-6 mt-4">
          <div class="text-10 w-100" >{{ username }}</div>
          <button  @click="onStartEditUsername" class="w-20 h-12 text-6   mt-2 bg-[#DEF7F5] text-#67879F; rounded-xl ">修改</button>
        </div>
      </div>
      <three-div></three-div>
      <three-button></three-button>
      <love-song-list @display-song="setDisplaySong" @display-song-list="setDisplaySongList"></love-song-list>
    </div>
  </div>
</template>

<style scoped>

</style>