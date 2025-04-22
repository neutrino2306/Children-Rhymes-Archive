<script setup lang="ts">

import {nextTick, onMounted, onUpdated, ref} from "vue";
import {store, store0, store1, store2, storeIndex} from "@/store/storemusic";
import {hColgroup} from "element-plus/es/components/table/src/h-helper";
import axios from "axios";
import component from "element-plus/es/components/tree-select/src/tree-select-option";

const props = defineProps({currentSong:Object, currentSongList:Array})
let currentSong = ref(props.currentSong)
let songId = ref(currentSong.value.songid)
const song_id = songId.value
console.log('SONGid'+ songId.value)


const emit = defineEmits(['page-to-send'])
const sendPlayTab = () => {
  emit('page-to-send','PlayPage')
}

const audioRef = ref(null);
const durationRef = ref(0);
function timeupdate() {
  // store.current = e.target.currentTime;
  // if(e.target.currentTime == store.endTime){
  //   nextPlay();
  // }
  console.log("**timeChange，findIndex")
  let cur = ref(audioRef.value.currentTime)
  store.lycIndex=findIndex(cur.value)
  console.log(store.lycIndex)

}

function findIndex(curTime){
  // console.log(audioRef.value.currentTime)
  for (let i =0; i < store.currentSongLyrics.length; i++) {
    if (curTime < store.currentSongLyrics[i+1]?.time && curTime > store.currentSongLyrics[i]?.time){
      // console.log(store.currentSongLyrics[i - 1].text ? i - 1 : i - 2) ;
      return i
    }
  }
  // 找遍了没有找到（说明播放到歌词的最后一句）
  return (store.currentSongLyrics.length - 1);
}
const getDuration = () => {
  durationRef.value = audioRef.value.duration;
  console.log(durationRef.value);

};

const audioUrl = ref(null);
audioUrl.value = store.songUrl[store.current]

function play(songId:any){
  addToHistory(songId)
  console.log("正在播放")
}

function prevPlay() {
  store.current = store.current === 0 ? props.currentSongList?.length - 1 : store.current - 1;
  console.log("点击上一首,当前current：",store.current)
  // 这里要延迟播放，因为要先让它加载一下
  nextTick(() => {
    audioRef.value.pause()
    // console.log(audioRef.value.textTracks)
  });
}

function nextPlay() {
  store.current = store.current === props.currentSongList?.length - 1 ? 0 : store.current + 1;
  console.log("点击下一首,当前current：",store.current)
  nextTick(() => {
    audioRef.value.pause()
    // console.log(audioRef.value.textTracks)
  });
}

onUpdated(()=>{
  audioUrl.value = store.songUrl[store.current]
  audioRef.value.load()
  console.log("页面正在双击进行选歌操作<-onupdate")
})

/*把歌曲加入历史记录中*/
async function addToHistory(songId:any){
  /*  console.log("songid"+props.currentSong?.songid)
    console.log("userid"+parseInt(localStorage.getItem("userId")??''))*/
  console.log(songId)
  try{
    const response = await axios.post("http://localhost:8080/HistoryController/addHistorySong", null, {
      params: {
        songid: songId,
        userid: parseInt(localStorage.getItem("userId")??'')
      }
    })
    if(response.data.historyid != null){
      console.log("添加到历史记录成功")
    }else{
      console.log("添加到历史记录失败，else处报错")
    }
  }catch (e) {
    console.log("添加到历史记录失败，catch处报错")
  }

}

</script>

<template>
  <div class="song-bottom fixed flex items-center justify-center z-9 w-full h-18 bg-white bottom-0 border-t-2 border-cyan px-10 select-none"
       >
    <div class="picture flex items-center gap-2 w-100">
      <img @click="sendPlayTab" class="w-14 " :src="props.currentSongList[store.current]?.pic" />
      <div class="audio-info text-xs  w-30 h-15 whitespace-normal">
        <div class="songname text-lg">{{ audioRef == null ? "未知" : props.currentSongList[store.current]?.songname }}</div>
        <div class="singername">{{ audioRef == null ? "未知" : props.currentSongList[store.current]?.singer }}</div>
      </div>
    </div>
    <div
        class="icons grow flex items-center gap-5 text-[#51596D]  ext-xl">
      <svg class="download w-6 h-6 hover:text-cyan" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21h12M12 3v14m0 0l5-5m-5 5l-5-5"/></svg>
      <svg class="random w-6 h-6 hover:text-cyan" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g id="feRandom0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feRandom1" fill="currentColor"><path id="feRandom2" d="M4 17a1 1 0 0 1 0-2h2l3-3l-3-3H4a1.001 1.001 0 0 1 0-2h3l4 4l4-4h2V5l4 3.001L17 11V9h-1l-3 3l3 3h1v-2l4 3l-4 3v-2h-2l-4-4l-4 4H4Z"/></g></g></svg>
      <svg @click="prevPlay" class="back  h-10 hover:text-cyan" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"/><path fill="currentColor" d="m117.23 246.7l114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6Z"/></svg>
      <svg @click="nextPlay" class="next  h-10 hover:text-cyan" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"/><path fill="currentColor" d="m394.77 246.7l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6Z"/></svg>
      <audio
          ref="audioRef"
          class="grow"
          controls
          @timeupdate="timeupdate"
          @play="play(props.currentSongList[store.current]?.songid)"
          @canplay="getDuration">
        <source :src="props.currentSongList[store.current]?.url" />
      </audio>
    </div>
    <div>timeupdate </div>



  </div>
</template>

<style scoped>

</style>