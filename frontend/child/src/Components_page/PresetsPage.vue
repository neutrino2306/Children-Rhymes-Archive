<script setup lang="ts">

import {ref} from "vue";
import PresetsPage_1 from "@/Components_single/Presets_1.vue";
import PresetsPage_2 from "@/Components_single/Presets_2.vue";
import PresetsPage_3 from "@/Components_single/Presets_3.vue";
import Home from "@/Components_page/Home.vue";

let pageName = ref("Page1")
const getPage = (page: string) => {
  pageName.value = page;
  // console.log(pageName.value);
}
</script>

<template>
  <PresetsPage_1 v-if="pageName == 'Page1'" @page-to-send="getPage" class="z-0"></PresetsPage_1>
  <PresetsPage_2 v-if="pageName == 'Page2'" @page-to-send="getPage" class="z-5"></PresetsPage_2>
  <PresetsPage_3 v-if="pageName == 'Page3'" @page-to-send="getPage" class="z-10"></PresetsPage_3>
  <home v-if="pageName == 'Home'"></home>

</template>

<style scoped>

</style>