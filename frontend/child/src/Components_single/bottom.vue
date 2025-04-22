<script setup lang="ts">
import {nextTick, ref} from "vue";
import {store} from "@/store/storemusic";
const audioRef = ref(null);
const durationRef = ref(0);
const getDuration = () => {
  durationRef.value = audioRef.value.duration;
  console.log(durationRef.value);
};

const audioUrl = ref(null);
audioUrl.value = store.songUrl[0]

function prevPlay() {
  store.current = store.current === 0 ? store.songUrl.length - 1 : store.current - 1;
  console.log("点击上一首,当前current：",store.current)
  // 这里要延迟播放，因为要先让它加载一下
  nextTick(() => {
    audioRef.value.pause()
    audioUrl.value = store.songUrl[store.current]
    audioRef.value.load()
  });

}

function nextPlay() {
  store.current = store.current === store.songUrl.length - 1 ? 0 : store.current + 1;
  console.log("点击下一首,当前current：",store.current)
  nextTick(() => {
    audioRef.value.pause()
    audioUrl.value = store.songUrl[store.current]
    audioRef.value.load()
  });
}

</script>

<template>
  <div class="song-bottom fixed flex gap-3 z-9 w-full h-18 bg-white bottom-0 border-t-2 border-cyan px-30 items-center">
    <svg @click="prevPlay" class="back  h-10 hover:text-cyan" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"/><path fill="currentColor" d="m117.23 246.7l114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6Z"/></svg>
    <svg @click="nextPlay" class="next  h-10 hover:text-cyan" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"/><path fill="currentColor" d="m394.77 246.7l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6Z"/></svg>
    <audio
        ref="audioRef"
        class="w-160 "
        controls
        @canplay="getDuration"
    >
      <source :src="audioUrl" />
    </audio>
  </div>

</template>

<style scoped>

</style>