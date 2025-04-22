<script setup lang="ts">

import RecommendPage from "@/Components_page/RecommendPage.vue";
import PlayPage from "@/Components_page/PlayPage.vue";
import UndoRedoSearch from "@/Components_single/UndoRedoSearch.vue";
import MusicRoomPage from "@/Components_page/MusicRoomPage.vue";
import RightUserPhoto from "@/Components_single/RightUserPhoto.vue";
import MyLovePage from "@/Components_page/MyLovePage.vue";
import ChildBoth from "@/Components_single/ChildBoth.vue";
import SongBottom from "@/Components_single/SongBottom.vue";
import LeftList from "@/Components_single/LeftList.vue";
import SearchPage from "@/Components_page/SearchPage.vue";
import HistoryPage from "@/Components_page/HistoryPage.vue";
import UserPage from "@/Components_page/UserPage.vue";
import {reactive, ref} from "vue";
import PlayListPage from "@/Components_page/PlayListPage.vue";
import GamePage from "@/Components_page/GamePage.vue";

let currentSong = ref({})
let currentSongList = ref([])

let pageName = ref("RecommendPage")
const getPage = (page: string) => {
  pageName.value = page
}
function setDisplaySong(displaySong:Object){
  currentSong.value = displaySong
}

function setDisplaySongList(displaySongList:any){
  currentSongList.value = displaySongList
}

</script>

<template>
  <child-both></child-both>
  <song-bottom class="pl-30 pr-35" @page-to-send="getPage" :currentSong="currentSong" :currentSongList="currentSongList"></song-bottom>
  <div class="body flex">
    <left-list @page-to-send="getPage"></left-list>
    <div class="main grow h-200 flex flex-col overflow-auto pb-15 mx-2 ">
      <undo-redo-search @page-to-send="getPage"></undo-redo-search>
      <!--        <component :is="getPage" />-->
      <div class="body-component">
        <RecommendPage v-if="pageName == 'RecommendPage'" @page-to-send="getPage" @display-song="setDisplaySong" @display-song-list="setDisplaySongList"></RecommendPage>
        <MusicRoomPage v-if="pageName == 'MusicRoomPage'" @page-to-send="getPage" @display-song="setDisplaySong" @display-song-list="setDisplaySongList"></MusicRoomPage>
        <MyLovePage v-if="pageName == 'MyLovePage'" @display-song="setDisplaySong" @display-song-list="setDisplaySongList"></MyLovePage>
        <HistoryPage v-if="pageName == 'HistoryPage'" @display-song="setDisplaySong" @display-song-list="setDisplaySongList"></HistoryPage>
        <GamePage v-if="pageName == 'GamePage'"></GamePage>

        <UserPage v-if="pageName == 'UserPage'" @display-song="setDisplaySong" @display-song-list="setDisplaySongList"></UserPage>

        <PlayListPage v-if="pageName == 'PlayListPage'" @display-song="setDisplaySong" @display-song-list="setDisplaySongList"></PlayListPage>
        <PlayPage v-if="pageName == 'PlayPage'" :currentSong="currentSong" :currentSongList="currentSongList"></PlayPage>
        <SearchPage v-if="pageName == 'SearchPage'" @display-sonSg="setDisplaySong" @display-song-list="setDisplaySongList"></SearchPage>
      </div>
    </div>
    <right-user-photo @page-to-send="getPage"></right-user-photo>
  </div>
</template>

<style scoped>
.main::-webkit-scrollbar {
  display: none;
}
</style>