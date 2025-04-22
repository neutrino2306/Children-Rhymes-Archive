<script setup lang="ts">
import {reactive, ref, watch,computed,watchEffect,provide,onMounted} from "vue";
import {store, store0, store1, store2, storeIndex} from "@/store/storemusic";
import axios from "axios";

let songList = ref([])
let songType = ref(localStorage.getItem("songType"))
const emit = defineEmits(['sendDataToParent','page-to-send', 'display-song', 'display-song-list'])

onMounted(()=>{
  /*这边获取到RecommendPage点击的歌单的type*/

  console.log("songType在SongList的值为" + songType.value)
  /*这边与后端连接查对应type的歌曲，并列出来*/
  getSongList(parseInt(songType.value??''))
  getLoveSongList(userId)
})

/*这边定义async方法获取歌单列表*/
async function getSongList(songType:number){
  const response = await axios.post("http://localhost:8080/SongController/findAllSongByStyle", null, {
    params: {
      style: songType
    }
  })
  if(response.data.length != 0){
    songList.value = response.data
    console.log("successful for get song by type")
    console.log(songList.value)
  }
}

const data = ref(store.songList.length);
watchEffect(() => {
  data.value = store.songList.length;
  // 触发名为 'updateSongCount' 的自定义事件，并传递 songCount 值
  console.log('歌曲列表长度：', data.value);
  emit('sendDataToParent', data);
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

function playSongFunction(song:any, songList:any, index:Number){
  /*  console.log("playSongFunction 执行了")*/
  emit("display-song", song)
  emit("display-song-list", songList)
  store.current = index
}

const loveSongList = ref([])
const userId = parseInt(localStorage.getItem("userId") ?? '')

/*通过用户id查我喜欢歌曲列表*/
async function getLoveSongList(userId: number) {
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
  await getLoveSongList(userId)

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
  await getLoveSongList(userId)

}

</script>

<template>
  <div class="mt-20 mb-5 pl-5 pr-5 z-10 h-10 text-3xl font-bold text-blue">
    歌单：{{songType}}
  </div>

  <ul class=" flex flex-col gap-2 w-full pl-5 pr-5 pb-20">
    <li v-for="(song,index) in songList" @click="playSongFunction(song, songList,index)"
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

  <!--  <ul class=" flex flex-col gap-2 w-full pl-5 pr-5 pb-20">
      <li v-for="(item, index) in store.songList"
          @click="store.current=index"
          class="h-30 flex justify-between items-center hover:bg-[#ccdfdc] ">

        <div class="song-and-info flex gap-5 justify-center items-center">
          <img :src=item.songPic class="w-25">
          <p class="text-cyan-6 font-600">{{ item.songName }}</p>
        </div>
        <p class="text-gray-6">{{ item.singer }}</p>
        &lt;!&ndash;      <p>{{store.songUrl[index]}}</p>&ndash;&gt;
        <div @click="deleteSong(index)">
          <img @click="sendDataToParent" src="../img/love.png " class="w-25 hover:w-28">
        </div>

      </li>
    </ul>-->

</template>

<style scoped>

</style>