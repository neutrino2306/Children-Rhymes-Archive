<script setup lang="ts">
const emit = defineEmits(['page-to-send'])
const sendHomeTab = () => {
  emit('page-to-send','Home')
}

const sendLoginTab = () => {
  emit('page-to-send','Login')
}


</script>

<template>
  <div class="flex items-center justify-around w-65 text-cyan-8 select-none">
    <div @click="sendLoginTab"
         class=" bg-cyan-1 border-cyan-6 border-1 hover:bg-cyan-2 rounded-2xl w-25 flex justify-center items-center">
      <div>L o g i n</div>
    </div>

    <div @click="sendHomeTab"
         class="bg-cyan-1 border-cyan-6 border-1 hover:bg-cyan-2 rounded-2xl w-25 flex justify-center items-center">
      <div>H o m e</div>
    </div>

  </div>
</template>

<style scoped>

</style>