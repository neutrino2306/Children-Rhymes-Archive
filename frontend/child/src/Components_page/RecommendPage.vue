<script setup lang="ts">

import RecommendSongList from "@/Components_single/RecommendSongList.vue";
import {storeIndex} from "@/store/storemusic";
import {user} from "@/store/storeuser";
import * as stream from "stream";

const emit = defineEmits(['page-to-send', 'display-song', 'display-song-list'])
const userName = localStorage.getItem("userName")
const sendPlayListTab = (index:number) => {
  storeIndex.value=index
  localStorage.setItem("songType",index.toString())
  console.log("localStorage.setItem后type的值为"+index.toString())
  console.log("歌单索引已经在推荐页 被修改为：",storeIndex.value)
  emit('page-to-send','PlayListPage')
}

function setDisplaySong(displaySong:any){
  emit('display-song',displaySong)
}

function setDisplaySongList(displaySongList:any){
  emit('display-song-list',displaySongList)

}

</script>

<template>
  <div class="mt-15 h-auto flex-col ">
    <div class="flex-col h-auto gap-y-4 text-xl">
      <img class="w-30 h-auto" src="../img/t-推荐.png"/>
      <div class="flex items-center">
        <img class="h-15 w-auto" src="../img/t-嗨，.png"/>
        <div class="text-2xl font-bold ">{{ userName }}</div>
        <img class="h-15 w-auto" src="../img/t-今日为你推荐.png"/>
      </div>
      <div class="h-40 w-full mt-2 flex items-center justify-between px-5">
        <div @click="sendPlayListTab(1)"
            class="flex w-100 h-full p-4 bg-[#61A693] bg-opacity-80 rounded-2xl">
          <div class="text-white">歌单1</div>
        </div>

        <div @click="sendPlayListTab(2)"
            class="flex w-50 h-full p-4 bg-[#7888A3] bg-opacity-80 rounded-2xl">
          <div class="text-white">歌单2</div>
        </div>

        <div @click="sendPlayListTab(3)"
            class="flex w-50 h-full p-4 bg-[#B9ACCD] bg-opacity-80 rounded-2xl">
          <div class="text-white">歌单3</div>
        </div>

        <div @click="sendPlayListTab(4)"
            class="flex w-50 h-full p-4 bg-[#B9ACCD] bg-opacity-80 rounded-2xl">
          <div class="text-white">歌单4</div>
        </div>

      </div>
    </div>
  </div>
  <div class="second-title mt-10 mb-2">
    <img src="../img/t-心动曲目.png" class="h-7 ">
  </div>

  <recommend-song-list @display-song="setDisplaySong" @display-song-list="setDisplaySongList" class="mb-20"></recommend-song-list>
</template>

<style scoped>

</style>