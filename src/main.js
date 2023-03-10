import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/rest.css"
import './plugins/element.js'
import api from "@/api/index"
Vue.prototype.$api=api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
