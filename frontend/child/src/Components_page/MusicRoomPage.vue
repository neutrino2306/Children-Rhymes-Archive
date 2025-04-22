<script setup lang="ts">
import {ref, reactive, computed, watchEffect, inject, watch, onMounted, type Ref} from "vue";
import Recommend from "@/Components_single/Recommend.vue";
import SongList from "@/Components_single/SongList.vue";
import BackGoSearch from "@/Components_single/BackGoSearch.vue";
import ThreeDiv from "@/Components_single/ThreeDiv.vue";
import ThreeButton from "@/Components_single/ThreeButton.vue";
import LoveSongList from "@/Components_single/LoveSongList.vue";
import {lovestore, store, storeIndex} from "@/store/storemusic";
import axios from "axios";


const songList = ref([])
const userId = localStorage.getItem("userId")??''
console.log('userId in LoveSongList is' + userId)

getLoveSongList()

async function getLoveSongList(){
  const response = await axios.post("http://localhost:8080/SongController/findAllSongByStyle", null, {
    params: {
      style: parseInt(userId)
    }
  })

  songList.value = response.data

  /*console.log("response data is "+response.data)
  console.log("songList.value is "+JSON.stringify(songList.value))*/
}

const emit = defineEmits(['page-to-send', 'display-song', 'display-song-list'])
const sendPlayListTab = (index:number) => {
  storeIndex.value=index
  localStorage.setItem("songType",index.toString())
  console.log("localStorage.setItem后,type在音乐馆的值为"+index.toString())
  console.log("歌单索引已经在MusicRoom页 被修改为：",storeIndex.value)
  emit('page-to-send','PlayListPage')
}

function playSongFunction(song:any, songList:any, index:Number){
  /*  console.log("playSongFunction 执行了")*/
  emit("display-song", song)
  emit("display-song-list", songList)
  store.current=index
}


</script>

<template>
  <div class="mt-15 h-auto flex-col overflow-y-scroll mb-25">
    <img class="h-14 mb-2" src="../img/t-音乐馆.png"/>
    <three-div></three-div>
    <div class="w-full mt-2 flex items-center justify-between pl-5 gap-2">
      <div v-for="(song, index) in songList" :key="index" @click="playSongFunction(song, songList,index)">
        <img v-if="index<5" :src="song.pic" class=" h-50 rounded-2xl ">
      </div>
    </div>
    <div class="flex-col h-auto gap-y-4 ">

      <div class="line-word flex justify-between items-center mr-5">
        <div class="flex   justify-start items-center mt-5">
          <img class="h-15 mt-6.5" src="../img/官方歌单.png"/>
          <img class="h-4 " src="../img/箭头.png"/>
        </div>
        <img class="h-6  mt-8" src="../img/更多.png"/>
      </div>
      <div class="w-full mt-2 flex items-center justify-start pl-5 gap-2.2 h-50">
        <div @click="sendPlayListTab(1)"
             class="flex w-50 h-50 h-full p-4 bg-[#61A693] bg-opacity-80 rounded-2xl">
          <div class="text-white">歌单1</div>
        </div>

        <div @click="sendPlayListTab(2)"
             class="flex w-50 h-50 h-full p-4 bg-[#7888A3] bg-opacity-80 rounded-2xl">
          <div class="text-white">歌单2</div>
        </div>

        <div @click="sendPlayListTab(3)"
             class="flex w-50 h-50 h-full p-4 bg-[#B9ACCD] bg-opacity-80 rounded-2xl">
          <div class="text-white">歌单3</div>
        </div>

        <div @click="sendPlayListTab(4)"
             class="flex w-50 h-50 h-full p-4 bg-[#B9ACCD] bg-opacity-80 rounded-2xl">
          <div class="text-white">歌单4</div>
        </div>
        <div @click="sendPlayListTab(5)"
             class="flex w-50 h-50 h-full p-4 bg-[#B9ACCD] bg-opacity-80 rounded-2xl">
          <div class="text-white">暂未获取到歌单详情</div>
        </div>

      </div>

    </div>
  </div>

</template>

<!--<style scoped>-->
<!--</style>-->

<!--<style scoped>-->

<!--</style>-->
<style scoped>
div::-webkit-scrollbar {
  display: none;
}

div {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>