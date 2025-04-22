<script setup lang="ts">
import { ref } from 'vue';
import Navigate from "@/Components_single/Navigate.vue";
import Home from "@/Components_page/Home.vue";
import Login from "@/Components_page/Login.vue";
import NotFound from "@/Components_page/NotFound.vue";
import Register from "@/Components_page/Register.vue"; // 确保路径正确

let pageName = ref("Login");
let signValue = ref(false);

const getPage = (page) => {
  pageName.value = page;
};

const getSign = (sign) => {
  if (sign) {
    signValue.value = sign;
    pageName.value = 'Home';
  }
};

</script>

<template>
  <Navigate @page-to-send="getPage" class="fixed z-10 mt-2"></Navigate>
  <div class="core overflow-auto">
    <keep-alive exclude="Register">
      <Login v-if="pageName === 'Login'"
             @login-success="getSign"
             @page-to-send="getPage"
      ></Login>
      <Home v-else-if="pageName === 'Home' && signValue"
      ></Home>
      <Register v-else-if="pageName === 'Register'"
                @page-to-send="getPage"
      ></Register>
      <NotFound v-else></NotFound>
    </keep-alive>
  </div>
</template>

<style scoped>
.core::-webkit-scrollbar {
  display: none;
}
</style>
