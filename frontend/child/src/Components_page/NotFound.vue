<script setup lang="ts">

import SongBottom from "@/Components_single/SongBottom.vue";
import LoveSongList from "@/Components_single/LoveSongList.vue";
import {ref} from "vue";
import SongListTest from "@/Components_single/song-list-test.vue";

</script>
<template>

  <div class=" w-full h-full  flex flex-col justify-center items-center pb-60 mt-30">
    <div class="bg-amber w-50 flex justify-center items-center text-2xl font-light"><div>请先进行登录</div></div>
<!--    <love-song-list class="w-full mt-10 pl-10 pr-10 h-57"></love-song-list>-->
    <song-list-test></song-list-test>
  </div>
  <song-bottom></song-bottom>






</template>

<style scoped>

</style>