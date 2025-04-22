<script setup lang="ts">

import {ref} from "vue";

const emit = defineEmits(['page-to-send','selectSex'])
let sex = ref()

const sendToPage2 = (sex:number)=>{
  emit('selectSex',sex)
  emit('page-to-send', 'Page2')
}
</script>

<template>
  <div class="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat" style="background-color: rgb(235, 246, 244);">
    <div class="w-200 h-120 bg-[#00BAAD] rounded-2xl p-10 relative">
      <img class="w-45 h-auto absolute -bottom-12 -left-18" src="../img/蜗牛.png"/>

      <div class="content flex-col">
        <div class="title flex relative">
          <img class="w-auto h-14" src="../img/t-选择性别.png"/>
          <button @click="sendToPage2(1)" class="absolute -right-8 -top-8">
            <svg class="w-20 h-20 text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"/></svg>
          </button>
        </div>

        <div class="choice w-full h-90 flex items-center justify-around">
          <div @click="sendToPage2(1)" class="w-60 h-60  rounded-full flex justify-center items-center">
            <div class="text-7xl text-white font-bold">男</div>
          </div>
          <div @click="sendToPage2(0)" class="w-60 h-60 bg-[#F6E7E8] rounded-full flex justify-center items-center">
            <div class="text-7xl text-[#FDB7D8] font-bold">女</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>