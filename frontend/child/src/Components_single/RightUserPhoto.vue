<script setup lang="ts">
import {user} from "@/store/storeuser";

const emit = defineEmits(['page-to-send'])
  const sendUserTab = () => {
    emit('page-to-send','UserPage')
  }
</script>

<template>
  <div class="user-photo w-20 h-20 bg-black rounded-full mt-2 mr-1.5 flex justify-center items-center"
    @click="sendUserTab"
  >
    <img :src="user.userList[user.userIndex].pic" class="w-20 h-20 rounded-full">
  </div>

</template>

<style scoped>

</style>