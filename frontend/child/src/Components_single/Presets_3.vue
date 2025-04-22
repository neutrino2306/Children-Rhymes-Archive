<script setup lang="ts">
import {ref} from "vue";

const isSelected1 = ref(false);
const isSelected2 = ref(false);
const isSelected3 = ref(false);
const isSelected4 = ref(false);
const isSelected5 = ref(false);
const isSelected6 = ref(false);
const isSelected7 = ref(false);
const isSelected8 = ref(false);

function Selection1 (){
  isSelected1.value=!isSelected1.value;
}
function Selection2 (){
  isSelected2.value=!isSelected2.value;
}
function Selection3 (){
  isSelected3.value=!isSelected3.value;
}
function Selection4 (){
  isSelected4.value=!isSelected4.value;
}
function Selection5 (){
  isSelected5.value=!isSelected5.value;
}
function Selection6 (){
  isSelected6.value=!isSelected6.value;
}
function Selection7 (){
  isSelected7.value=!isSelected7.value;
}
function Selection8 (){
  isSelected8.value=!isSelected8.value;
}

const emit = defineEmits(['page-to-send','register'])

const sendToHome = ()=>{
  console.log("page3 sendToHome")
  emit('register', 'pre_Home')
}
</script>

<template>
  <div class="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat" style="background-color: rgb(235, 246, 244);">
    <div class="w-200 h-120 bg-[#00BAAD] rounded-2xl p-8 relative">
      <img class="w-40 h-auto absolute -bottom-15 -left-15 z-10" src="../img/预设置番茄.png"/>

      <div class="content relative">
        <div class="title relative">
          <img class="w-auto h-14" src="../img/t-选择音乐风格.png"/>
          <button @click="sendToHome" class="absolute -right-6 -top-6">
            <svg class="w-20 h-20 text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"/></svg></button>

        </div>

        <div class="flex items-center justify-around mt-5">
          <button class="w-40 h-40 bg-[#F6E7E8] rounded-full flex justify-center items-center shadow-lg"
              @click="Selection1" :class="{glow: isSelected1}">
            <div class="text-4xl text-[#FDB7D8] font-bold">热情</div>
          </button>
          <button class="w-40 h-40 bg-[#80A1AC] rounded-full flex justify-center items-center shadow-lg"
              @click="Selection2" :class="{glow: isSelected2}">
            <div class="text-4xl text-white font-bold">旋律</div>
          </button>
          <button class="w-40 h-40 bg-[#F1EDBE] rounded-full flex justify-center items-center shadow-lg "
                  @click="Selection3" :class="{glow: isSelected3}">
            <div class="text-4xl text-[#FF5733] font-bold">节奏</div>
          </button>
          <button class="w-40 h-40 bg-[#FDA2D3] rounded-full flex justify-center items-center shadow-lg "
                  @click="Selection4" :class="{glow: isSelected4}">
            <div class="text-4xl text-[#F9EFF0] font-bold">轻快</div>
          </button>
        </div>

        <div class="flex items-center justify-around mt-5">
          <button class="w-40 h-40 bg-[#7FF4FC] rounded-full flex justify-center items-center shadow-lg"
                  @click="Selection5" :class="{glow: isSelected5}">
            <div class="text-4xl text-[#808080] font-bold">纯音乐</div>
          </button>
          <button class="w-40 h-40 bg-[#975750] rounded-full flex justify-center items-center shadow-lg "
                  @click="Selection6" :class="{glow: isSelected6}">
            <div class="text-4xl text-white font-bold">自然</div>
          </button>
          <button class="w-40 h-40 bg-[#D0B489] rounded-full flex justify-center items-center shadow-lg "
                  @click="Selection7" :class="{glow: isSelected7}">
            <div class="text-4xl text-[#975750] font-bold">祈福</div>
          </button>
          <button class="w-40 h-40 bg-[#FFBB22] rounded-full flex justify-center items-center shadow-lg "
                  @click="Selection8" :class="{glow: isSelected8}">
            <div class="text-4xl text-[#F6E7E8] font-bold">鼓点</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow {
  box-shadow: 0 0 10px rgba(0, 0, 255, 1); /* 用于模拟发光效果的 box-shadow */
}

</style>