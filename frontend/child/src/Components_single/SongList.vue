<!--已经把它凡高了PlayListPage，可以抛弃掉这一页了-->
<script setup lang="ts">
import {reactive, ref, watch,computed,watchEffect,provide,onMounted} from "vue";
import {store, store0, store1, store2, storeIndex} from "@/store/storemusic";
import axios from "axios";

let songList = ref([])
let songType = ref(localStorage.getItem("songType"))

onMounted(()=>{
  /*这边获取到RecommendPage点击的歌单的type*/

  console.log("songType在SongList的值为" + songType.value)
  /*这边与后端连接查对应type的歌曲，并列出来*/
  getSongList(parseInt(songType.value??''))
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


const emit = defineEmits(['sendDataToParent']);
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


</script>

<template>
  <div class="mt-20 mb-5 pl-5 pr-5 z-10 h-10 text-3xl font-bold text-blue">
    歌单：{{songType}}
  </div>

  <ul class=" flex flex-col gap-2 w-full pl-5 pr-5 pb-20">
    <li v-for="song in songList"
        class="h-30 flex justify-between items-center hover:bg-[#ccdfdc] ">

      <div class="song-and-info flex gap-5 justify-center items-center">
        <img :src=song.pic class="w-25">
        <p class="text-cyan-6 font-600">{{ song.songname }}</p>
      </div>
      <p class="text-gray-6">{{ song.singer }}</p>
      <!--      <p>{{store.songUrl[index]}}</p>-->
      <div>
        <img @click="sendDataToParent" src="../img/love.png " class="w-25 hover:w-28">
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