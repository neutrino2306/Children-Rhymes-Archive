<script setup lang="ts">
import {reactive,ref} from "vue";

const activeIndex = ref(0)
const emit = defineEmits(['page-to-send'])

const sendRecTab = (tabIndex) => {
  activeIndex.value = tabIndex
  emit('page-to-send','RecommendPage')
}

const sendMusicRoomTab = (tabIndex) => {
  activeIndex.value = tabIndex
  emit('page-to-send','MusicRoomPage')
}

const sendMyLoveTab = (tabIndex) => {
  activeIndex.value = tabIndex
  emit('page-to-send','MyLovePage')
}

const sendHistoryTab = (tabIndex) => {
  activeIndex.value = tabIndex
  emit('page-to-send','HistoryPage')
}

function sendGameTab(tabIndex) {
  activeIndex.value = tabIndex
  emit('page-to-send','GamePage')
}

</script>

<template>
  <div class=" left-list   z-8 w-50 h-full lg:w-60 xl:w-70 bg-[#dae6e6]  pb-50 pt-9">
    <div class="logo flex items-center justify-center h-20 px-5 pt-6 ml--1 select-none">
      <img src="../img/logo.png" class=" h-20 ">
    </div>
    <div class="under-logo flex flex-col gap-1">
      <div class="online-music flex flex-col gap-2 justify-start mt-8 ml-10 mr-8">
        <img src="../img/t-在线音乐.png" class=" h-5 w-34">
        <button @click="sendRecTab(1)"
          class="t-recommend hover:bg-[#bfd6d2] rounded-2xl flex gap-3 justify-start items-center"
          :class="[activeIndex == 1 ? 'active': '']"
        >
          <img src="../img/推荐.png" class="h-12">
          <img src="../img/t-推荐.png" class="h-8.5 ml-3  mt--0.5">
        </button>
        <button @click="sendMusicRoomTab(2)"
                class="t-music-room hover:bg-[#bfd6d2] rounded-2xl flex gap-3 justify-start items-center  ml--2"
                :class="[activeIndex == 2 ? 'active': '']"
        >
          <img src="../img/音乐馆.png" class="h-12">
          <img src="../img/t-音乐馆.png" class="w-30 flex justify-center items-center mt--1" >
        </button>
      </div>

      <div class="my-music flex flex-col gap-2 justify-start mt-6 ml-10 mr-8">
        <img src="../img/t-我的音乐.png" class=" h-5 w-34">
        <button @click="sendMyLoveTab(3)"
                class="t-mylove hover:bg-[#bfd6d2] rounded-2xl flex gap-3 justify-start items-center"
                :class="[activeIndex == 3 ? 'active': '']"
        >
          <img src="../img/我喜欢.png" class="h-12">
          <img src="../img/t-我喜欢.png" class="h-8 ml-3 w-35 flex justify-center items-center mt--1" >
        </button>
        <button @click="sendHistoryTab(4)"
                class="t-history rounded-2xl flex gap-3 justify-start items-center "
                :class="[activeIndex == 4 ? 'active': '']"
        >
          <img src="../img/最近播放.png" class="h-12">
          <img src="../img/t-最近播放.png" class="h-9.5 ml-2  flex justify-center items-center mt-1.5">
        </button>
      </div>

      <div class="music-play flex flex-col gap-2 justify-start mt-6 ml-10 mr-8">
        <img src="../img/t-音乐乐园.png" class=" h-5 w-34">
        <button @click="sendGameTab(5)"
                class="t-history rounded-2xl flex gap-3 justify-start items-center "
                :class="[activeIndex == 5 ? 'active': '']"
        >
          <img src="../img/游戏.png" class="h-12">
          <img src="../img/t-游戏.png" class="h-7.6 ml-2.5 mt--1">
        </button>
        <button class="hover:bg-[#bfd6d2] active:bg-[#bfd6d2]
        focus:outline-none focus:ring focus:ring-[#bfd6d2] focus:bg-[#bfd6d2]
         rounded-2xl flex gap-3 justify-start items-center">
          <img src="../img/音乐探索.png" class="h-12 w-13">
          <img src="../img/t-音乐探索.png" class="w-33 flex justify-center items-center mt--0.5">

        </button>

      </div>
    </div>
  </div>

</template>

<style scoped>
.active{
  background-color: #bfd6d2;
}
</style>