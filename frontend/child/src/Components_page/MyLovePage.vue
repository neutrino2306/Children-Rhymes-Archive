<script setup lang="ts">
import { ref,reactive, computed,watchEffect,inject,watch,onMounted} from "vue";
import Recommend from "@/Components_single/Recommend.vue";
import SongList from "@/Components_single/SongList.vue";
import BackGoSearch from "@/Components_single/BackGoSearch.vue";
import ThreeDiv from "@/Components_single/ThreeDiv.vue";
import ThreeButton from "@/Components_single/ThreeButton.vue";
import LoveSongList from "@/Components_single/LoveSongList.vue";
import songList from "@/Components_single/SongList.vue";
import RecommendSongList from "@/Components_single/RecommendSongList.vue";

let songCount = ref(0);
const emit = defineEmits(['page-to-send', 'display-song', 'display-song-list'])
const handleChildData = (data:number) => {
  songCount.value= data;
};

function setDisplaySong(displaySong:any){
  /*console.log("mylovepage中的displaySong为"+displaySong.toString())*/
  emit('display-song',displaySong)
}

function setDisplaySongList(displaySongList:any){
  /*console.log("mylovepage中的displaySongList为"+displaySongList.toString())*/
  emit('display-song-list',displaySongList)

}

</script>

<template>
    <div class="h-50 flex flex-col gap-5 mt-15">
      <div class="flex items-center">
        <img class=" w-40 h-auto" src="../img/t-我喜欢（右-标题版）.png"/>
        <div class="text-4xl">({{ songCount }})</div>
      </div>
      <three-div></three-div>
      <three-button></three-button>

      <div class="">
        <love-song-list @display-song="setDisplaySong" @display-song-list="setDisplaySongList" @love-song-count="handleChildData"></love-song-list>
      </div>


    </div>
<!--  </div>-->
</template>

<style scoped>

</style>