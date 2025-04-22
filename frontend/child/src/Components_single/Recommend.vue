<script setup lang="ts">

import ThreeDiv from "@/Components_single/ThreeDiv.vue";
import ThreeButton from "@/Components_single/ThreeButton.vue";
</script>

<template>
  <div class="flex-col h-auto gap-y-4 text-xl">
    <img class="w-30 h-auto" src="../img/t-推荐.png"/>
    <div class="flex items-center">
      <img class="h-15 w-auto" src="../img/t-嗨，.png"/>
      <div class="text-2xl font-bold ">用户1</div>
      <img class="h-15 w-auto" src="../img/t-今日为你推荐.png"/>
    </div>
    <div class="h-40 w-full mt-2 flex items-center justify-between pr-2">
      <div class="flex w-100 h-full p-4 bg-[#61A693] bg-opacity-80 rounded-2xl">
        <div class="text-white">Podcasts</div>
      </div>

      <div class="flex w-50 h-full p-4 bg-[#7888A3] bg-opacity-80 rounded-2xl">
        <div class="text-white">Made for you</div>
      </div>

      <div class="flex w-50 h-full p-4 bg-[#B9ACCD] bg-opacity-80 rounded-2xl">
        <div class="text-white">charts</div>
      </div>

      <div class="flex w-50 h-full p-4 bg-[#B9ACCD] bg-opacity-80 rounded-2xl">
        <div class="text-white">charts</div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>