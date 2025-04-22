<script setup lang="ts">
import axios from 'axios'
import {reactive,ref} from "vue";
import {store} from '@/store/storemusic.ts'

let i = ref();
function getSongList() {
  let data = ref();
  axios({
    url: '/personalized?limit=3',  /*热门歌单接口地址*/
    method: 'post'
  })
      .then(res => {
        console.log("我拿到的若干歌单数据：", res.data.result)
        store.songListInfo = res.data.result
        console.log(store.songListInfo)
        for(i = 0; i<3;i++){
          store.songListId[i] = store.songListInfo[i].id
        }
        console.log(store.songListId)
      })
      .catch(err => {
        console.log(err)
      })
}


function getSongId(index:number) {
  axios({
    url: store.songListUrl[index],  /*热门歌单接口地址*/
    method: 'post'
  })
      .then(res => {
        console.log("我拿到的数据：", res.data.privileges)
        for(i = 0; i<10;i++){
          store.songIdInList[i] = res.data.privileges[i].id
        }
        console.log(store.songIdInList)
      })
      .catch(err => {
        console.log(err)
      })
}

function getSongInfo(index:number) {
  axios({
    url: store.songUrlInList[index],  /*热门歌单接口地址*/
    method: 'post'
  })
      .then(res => {
        console.log(res.data.data[index].url)
        // for(i = 0; i<10;i++){
        //   store.songIdInList[i] = res.data.privileges[i].id
        // }
        // console.log(store.songIdInList)
      })
      .catch(err => {
        console.log(err)
      })
}
</script>

<template>
  <div >
<!--    <el-button @click="getSongInfo(0)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(1)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(2)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(3)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(4)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(5)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(6)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(7)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(8)">获取歌曲信息</el-button>-->
<!--    <el-button @click="getSongInfo(9)">获取歌曲信息</el-button>-->
    <el-button @click="getSongList()">获取歌单</el-button>
  </div>
<!--  <div v-for="item in store.musiclist">-->
<!--    {{item.playlistTag.id}}-->
<!--  </div>-->
</template>

<style scoped>

</style>