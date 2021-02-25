import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Modal from "@burhanahmeed/vue-modal-2";
import { HelloWorld } from  'dialogue-box';


Vue.component('hello-world', HelloWorld)
Vue.use(Modal)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
