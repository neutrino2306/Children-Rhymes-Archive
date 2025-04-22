<script setup lang="ts">

const emit = defineEmits(['page-to-send'])

const sendToPage3 = ()=>{
  emit('page-to-send', 'Page3')
}
</script>

<template>
  <div class="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat" style="background-color: rgb(235, 246, 244);">
    <div class="w-200 h-120 bg-[#00BAAD] rounded-2xl p-10 relative">
      <img class="w-40 h-auto absolute bottom-0 left-0" src="../img/预设置action.png"/>
      <img class="w-40 h-auto absolute bottom-0 right-0" src="../img/预设置牛奶.png"/>

      <div class="content">
        <div class="title relative">
          <img class="w-auto h-14" src="../img/t-出生年月.png"/>
          <button @click="sendToPage3" class="absolute -right-8 -top-8">
            <svg class="w-20 h-20 text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"/></svg></button>
        </div>

        <div class="w-full h-full flex items-center justify-center">
          <img class="w-90 h-auto" src="../img/预设置日历.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>