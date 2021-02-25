import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { HelloWorld } from  'dialogue-box';


Vue.component('hello-world', HelloWorld)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
