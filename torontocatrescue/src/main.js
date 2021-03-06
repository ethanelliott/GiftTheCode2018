import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'vue-material/dist/vue-material.min.css'

axios.defaults.baseURL = 'http://192.168.0.29:1337/api'
Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
