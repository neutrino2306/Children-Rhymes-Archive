import '@unocss/reset/tailwind.css'  //写了这个会对h1预设的样式进行重置

import { createApp } from 'vue'//从vue软件包中，导入一个，这里这个路径表明：这个vue是从node_modules中找的
import App from './App.vue' //从当前目录中
// import router from "@/router";

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'virtual:uno.css' //virtual说明这是个虚拟模块，相当于是一个占位符。把原子化的样式表翻译后，会在这里进行导入。uno本身是没有这个css文件的
//这样子uno才知道把这些样式放到哪里去，就是放到这。

// createApp(App).mount('#app')

createApp(App).use(autoAnimatePlugin)
    .mount('#app')

// mount 进行挂载操作。创建了一个App.vue，
// 需要将其挂载到这个app选择器上


