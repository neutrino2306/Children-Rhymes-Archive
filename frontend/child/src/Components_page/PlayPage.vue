<script setup lang="ts">

import LoveSongList from "@/Components_single/LoveSongList.vue";
import {store} from "@/store/storemusic";
import {ref, onMounted, onUnmounted, computed, watch, nextTick} from "vue";
import type { PropType} from 'vue';

// const props = defineProps({currentSong:Object, currentSongList:Array})
const props = defineProps({
  currentSong: Object,
  currentSongList: {
    type: Array as PropType<{ lrc: string; }[]>,
    default: () => [] // 默认为空数组
  }
});
let currentSong = ref(props.currentSong)
let lyricsContainerRef = ref()
watch(() => store.current, (newIndex) => {
  currentSong.value = props.currentSongList[newIndex];
}, { immediate: true });


let songId = ref(currentSong.value?.songid)//使用可选链操作符（?.）来安全地访问这个值，这样即使value是undefined，代码也不会抛出错误
const currentSongLyrics = computed(() => {
  const lyrics = currentSong.value?.lrc || '';

  const lines = lyrics.split("[");
  const lyricArray = []; // 歌词对象数组

  for (let i = 1; i < lines.length; i++) { //i=0为空
    // console.log(lines[i])
    const str = lines[i];
    const parts = str.split("]");
    const timeStr = parts[0].substring(1);
    const obj = {
      time: parseTime(timeStr),
      text: parts[1]
    };
    lyricArray.push(obj);
  }
  // console.log(lyricArray)
  store.currentSongLyrics = lyricArray
  return lyricArray;
});

function parseTime(timeStr) {
  const parts = timeStr.split(":");
  return +parts[0] * 60 + +parts[1]; // +一元运算符转数字
}

const itemRef = ref<any>()

// 滚动到当前歌词的函数
function scrollToCurrentLyric(index) {
  if(index>-1){
    nextTick(() => {
      const lyricsContainer = lyricsContainerRef.value;
      if (!lyricsContainer) return;
      let indexcur = store.lycIndex
      console.log(itemRef.value[store.lycIndex])
      const currentLyricElement = itemRef.value[store.lycIndex];
      if (currentLyricElement) {
        // lyricsContainer.scrollTop = currentLyricElement.offsetTop - lyricsContainer.offsetHeight / 2;
        itemRef.value[store.lycIndex].scrollIntoView({behavior:'smooth',block:'center'})

      }
    });
    console.log("正在执行滚动")
  }

}

// 监听 currentLyricIndex 变化并滚动到当前歌词
watch(()=>store.lycIndex, (newLycIndex)=>{
  scrollToCurrentLyric(newLycIndex)
});


</script>

<template>
    <!--  这里是歌曲信息部分-->
    <div class="fixed w-100 h-100 top-35 left-80 ">
      <div class="flex flex-col items-center gap-20">
        <div>
          <img class="w-80 " src="../img/唱片(合并版).png"/>
          <img class="w-50 h-50 rounded-full -mt-67 ml-14" :src="props.currentSongList[store.current]?.pic"/>
        </div>

        <!-- 这里底下是歌名及歌曲信息-->
        <div class="flex flex-col gap-3 items-center justify-center">
          <p class="text-4xl font-bold text-[#3b96ff]">{{ props.currentSongList[store.current]?.songname == null ? "未知" : props.currentSongList[store.current]?.songname }}</p>
          <p class="text-2xl text-bluegray">{{ props.currentSongList[store.current]?.singer === null ? "未知" : props.currentSongList[store.current]?.singer }}</p>
        </div>
      </div>
    </div>

    <!--  这里是歌词部分-->
  <el-scrollbar class="h-300 mt-15 mb-20 ml-40" ref="lyricsContainerRef">
    <ul>
      <li v-for="(lyric, index) in currentSongLyrics"
          :key="index"
          :id="'li' + (index+1)"
          class=" lyric-line " :class="[index==store.lycIndex ? 'active' : '']"
          ref="itemRef"
      >
        {{ lyric.text }}
      </li>
    </ul>

  </el-scrollbar>
</template>

<style scoped>
.lyric-line {
  padding: 10px 0;
  font-size: 1.5em;
  width: 100%; /* 确保歌词行宽度与容器一致 */
  text-align: center; /* 文本居中对齐 */
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Microsoft JhengHei', '微软正黑体', sans-serif;
}


.active {
  padding: 10px 0;
  font-size: 3em;
  width: 100%; /* 确保歌词行宽度与容器一致 */
  text-align: center; /* 文本居中对齐 */
  color: orange;
  font-family: 'Microsoft JhengHei', '微软正黑体', sans-serif;
}
</style>


