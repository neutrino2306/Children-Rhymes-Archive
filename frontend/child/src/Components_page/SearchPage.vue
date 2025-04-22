<script setup lang="ts">

import SongList from "@/App.vue";
import LoveSongList from "@/Components_single/LoveSongList.vue";
import ThreeButton from "@/Components_single/ThreeButton.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import {store} from "@/store/storemusic";

/*获取用户搜索内容*/
const userSearch = localStorage.getItem("userSearch")
let songList = ref([])
const emit = defineEmits(['display-song', 'display-song-list','love-song-count'])
/*根据用户搜索内容调后端接口进行查询*/
async function getSearchList(){
  const response = await axios.post("http://localhost:8080/SongController/findAllBySearchContains", null, {
    params: {
      search: userSearch
    }
  })

  if(response.data != null){
    songList.value = response.data
  }else {
    alert("暂无歌曲信息")
  }
}

function playSongFunction(song: any, songList: any, index) {
  console.log("playSongFunction 执行了")
  emit("display-song", song)
  emit("display-song-list", songList)
  store.current=index
}

onMounted(()=>{
  getSearchList()
})

</script>

<template>
  <div class="pt-15">
    <three-button></three-button>
<!--展示搜索结果-->
    <ul class=" flex flex-col gap-2 w-full pl-5 pr-5 pb-20">
      <li v-for="(song,index) in songList" @click="playSongFunction(song, songList,index)"
          class="h-30 flex justify-between items-center hover:bg-[#ccdfdc] ">

        <div class="song-and-info flex gap-5 justify-center items-center">
          <img :src=song.pic class="w-25">
          <p class="text-cyan-6 font-600">{{ song?.songname }}</p>
        </div>
        <p class="text-gray-6">{{ song?.singer }}</p>
        <!--      <p>{{store.songUrl[index]}}</p>-->
        <div>
          <img @click="sendDataToParent" src="../img/love.png " class="w-25 hover:w-28">
        </div>

      </li>
    </ul>

<!--    <love-song-list></love-song-list>-->
  </div>



</template>

<style scoped>

</style>