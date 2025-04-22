<script setup lang="ts">
import {reactive, ref, watch, computed, watchEffect, provide, onMounted, type Ref} from "vue";
import {lovestore, store, store0, store1, store2, storeIndex} from "@/store/storemusic";
import axios from "axios";

const newArray:Ref<any[]> = ref([])
let songList = ref([])
const emit = defineEmits(['page-to-send', 'display-song', 'display-song-list','love-song-count'])
const userId = localStorage.getItem("userId") ?? ''
console.log('userId in LoveSongList is' + userId)

onMounted(()=>{
  getLoveSongList()
  getLoveSongList2(parseInt(userId))
})

async function getLoveSongList() {
  const response = await axios.post("http://localhost:8080/LoveController/findAllLoveByUserid", null, {
    params: {
      userid: parseInt(userId)
    }
  })
  songList.value = response.data
  newArray.value = songList.value.map(item => item.song);
  /*console.log("response data is "+response.data)
  console.log("songList.value is "+JSON.stringify(songList.value))*/
}

const data = ref(songList.value.length);
watchEffect(() => {
  data.value = songList.value.length;
  // 触发名为 'updateSongCount' 的自定义事件，并传递 songCount 值
  console.log('歌曲列表长度：', data.value);
  emit('love-song-count', data)
});

let strInStorage = localStorage.getItem('store.songList')??'[]'
// store.songList.push(...JSON.parse(strInStorage));

watch(store.songList, ()=>{
  localStorage.setItem("store.songList", JSON.stringify(store.songList))
  console.log("store.songList 被修改");
})

function deleteSong(index: number){
  store.songList.splice(index, 1);
}
function playSongFunction(song: any, songList: any, index) {
  console.log("playSongFunction 执行了")
  emit("display-song", song)
  emit("display-song-list", songList)
  store.current=index
}

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
  <div>
    <ul class=" flex flex-col gap-2 w-full pl-5 pr-5 pb-20">
      <li v-for="(song,index) in newArray" @click="playSongFunction(song, newArray,index)"
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

</template>

<style scoped>

</style>