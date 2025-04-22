<script setup lang="ts">

import ThreeButton from "@/Components_single/ThreeButton.vue";
import ThreeDiv from "@/Components_single/ThreeDiv.vue";
import LoveSongList from "@/Components_single/LoveSongList.vue";
import {onMounted, type Ref, ref} from "vue";
import axios from "axios";
import {user} from "@/store/storeuser";
import {store} from "@/store/storemusic";

const newArray:Ref<any[]> = ref([])
let songList = ref([])
const userId = localStorage.getItem("userId")??''
const emit = defineEmits(['page-to-send', 'display-song', 'display-song-list'])

onMounted(()=>{
  getLoveSongList()
  getLoveSongList2(parseInt(userId))
})

async function getLoveSongList(){
  const response = await axios.post("http://localhost:8080/HistoryController/findAllHistoryByUserid", null, {
    params: {
      userid: parseInt(userId)
    }
  })
  songList.value = response.data
  newArray.value = songList.value.map(item => item.song);
  console.log("response data is "+response.data)
  console.log("songList.value is "+JSON.stringify(songList.value))
}

function playSongFunction(song: any, songList: any, index) {
  console.log("playSongFunction 执行了")
  emit("display-song", song)
  emit("display-song-list", songList)
  store.current = index
}

/*底下的功能是为了点击小熊转换喜欢或不喜欢并在数据库插数据服务*/
const loveSongList = ref([])

async function getLoveSongList2(userId: number) {
  console.log(userId + "userId")
  try {
    const response = await axios.post('http://localhost:8080/LoveController/findAllLoveByUserid', null, {
      params: {
        userid: userId
      }
    })
    if (response.data != null) {
      loveSongList.value = response.data
      console.log("查询用户喜欢的歌曲成功")
    } else {
      console.log("查询用户喜欢的歌曲失败，在else处报错")
    }
  } catch (e) {
    console.log(e)
    console.log("查询用户喜欢的歌曲失败，在catch处报错")
  }

}

const isLiked = (songId: number) => {
  return loveSongList.value.some((item) => item.songid === songId);
}

async function changeToLiked(songId: number, userId: number) {
  try {
    const response = await axios.post('http://localhost:8080/LoveController/addLoveSong', null, {
      params: {
        songid: songId,
        userid: userId
      }
    })
    if (response.data != null) {
      loveSongList.value = response.data
      console.log("添加到喜欢的歌曲成功")
    } else {
      console.log("添加到喜欢的歌曲失败，在else处报错")
    }
  } catch (e) {
    console.log(e)
    console.log("添加到喜欢的歌曲失败，在catch处报错")
  }
  await getLoveSongList2(userId)
  await getLoveSongList()

}

async function changeToDisliked(songId: number, userId: number) {
  try {
    const response = await axios.post('http://localhost:8080/LoveController/deleteLoveSongBySongid', null, {
      params: {
        songid: songId,
        userid: userId
      }
    })
    if (response.data != null) {
      loveSongList.value = response.data
      console.log("删除喜欢的歌曲成功")
    } else {
      console.log("删除喜欢的歌曲失败，在else处报错")
    }
  } catch (e) {
    console.log(e)
    console.log("删除喜欢的歌曲失败，在catch处报错")
  }
  await getLoveSongList2(userId)
  await getLoveSongList()

}

</script>

<template>
  <div class="h-50 flex flex-col gap-5 mt-15">
    <div class="flex items-center">
      <img class=" w-55 h-auto" src="../img/t-最近播放（右-标题版）.png"/>
      <div class="text-4xl"></div>
    </div>
    <three-div></three-div>
    <three-button></three-button>

    <div class="">
      <ul class=" flex flex-col gap-2 w-full pl-5 pr-5 pb-20">
        <li v-for="(song, index) in newArray" @click="playSongFunction(song, newArray,index)"
            class="h-30 flex justify-between items-center hover:bg-[#ccdfdc] ">

          <div class="song-and-info flex gap-5 justify-center items-center">
            <img :src=song.pic class="w-25">
            <p class="text-cyan-6 font-600">{{ song.songname }}</p>
          </div>
          <p class="text-gray-6">{{ song.singer }}</p>
          <!--      <p>{{store.songUrl[index]}}</p>-->
          <div v-if="isLiked(song.songid)">
            <img @click="changeToDisliked(song.songid, userId)" src="../img/love.png " class="w-25 hover:w-28">
          </div>
          <div v-else>
            <img @click="changeToLiked(song.songid, userId)" src="../img/no-love.png " class="w-25 hover:w-28">
          </div>

        </li>
      </ul>
    </div>


  </div>
</template>

<style scoped>

</style>